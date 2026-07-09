$port = 8000
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "Server started successfully."
    Write-Host "Local Host Link: http://localhost:$port/auralix.html"
    Write-Host "Press Ctrl+C to stop the server."
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $path = $request.Url.LocalPath
        if ($path -eq "/" -or $path -eq "") {
            $path = "/auralix.html"
        }
        
        # Convert path to local path
        $decodedPath = [System.Uri]::UnescapeDataString($path)
        $localPath = Join-Path $PSScriptRoot $decodedPath.Replace("/", "\").TrimStart("\")
        
        # Resolve folder to default file
        if (Test-Path $localPath -PathType Container) {
            $localPath = Join-Path $localPath "auralix.html"
        }
        
        if (Test-Path $localPath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css" { "text/css; charset=utf-8" }
                ".js" { "application/javascript; charset=utf-8" }
                ".jpg" { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".png" { "image/png" }
                ".svg" { "image/svg+xml" }
                ".gif" { "image/gif" }
                ".webm" { "video/webm" }
                ".mp4" { "video/mp4" }
                ".webp" { "image/webp" }
                ".ico" { "image/x-icon" }
                default { "application/octet-stream" }
            }
            
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            
            # Write response
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
            $response.ContentType = "text/plain"
            $response.ContentLength64 = $errBytes.Length
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    }
} catch {
    Write-Error $_
} finally {
    if ($null -ne $listener) {
        $listener.Close()
    }
}
