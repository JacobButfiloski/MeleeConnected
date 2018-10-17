    var windowBool = false;
    
    function minimizeWindow()
    {
        const { remote } = require('electron')
        remote.BrowserWindow.getFocusedWindow().minimize();
    }

    function maximizeWindow()
    {
        if(windowBool === true)
        {
            window.resizeTo(1280, 720);
            windowBool = false;
        } else if(windowBool === false)
        {
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height); 
            windowBool = true;
        }
        
    }

    function closeWindow()
    {
        
        window.close();
    }