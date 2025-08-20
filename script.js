function convertImage() {
    let inputUrl = document.getElementById("inputUrl").value.trim();
    let convertBtn = document.getElementById("convertBtn");
    
    if (!inputUrl.includes("blogger.googleusercontent.com")) {
        return;
    }

    // Extract base URL before "/s" and get file name
    let parts = inputUrl.split("/s");
    let baseUrl = parts[0]; // Image base URL
    let fileName = parts[1].split("/").pop(); // Extract file name

    // Construct direct download link
    let directLink = `${baseUrl}/s16000-d/${fileName}`;

    // Change button to "Copy Link"
    convertBtn.innerText = "Copy Link";
    convertBtn.classList.add("fade-in");

    // Update button click function to copy the link
    convertBtn.onclick = function() { 
        navigator.clipboard.writeText(directLink);
    };
}
        // Aapka right-click disable wala code (No Changes)
        document.addEventListener('contextmenu', e => e.preventDefault(), { capture: true });
        document.addEventListener('selectstart', e => e.preventDefault(), { capture: true });
        document.addEventListener('dragstart', e => e.preventDefault(), { capture: true });
        document.addEventListener('keydown', e => {
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) || (e.ctrlKey && ['u','s','p','c','x'].includes(e.key.toLowerCase()))) {
                e.preventDefault();
            }
        }, { capture: true });
        document.addEventListener('copy', e => e.preventDefault(), { capture: true });
        document.addEventListener('cut',  e => e.preventDefault(), { capture: true });

(() => {
  const css = `
    * { text-decoration: none !important; cursor: none !important; }
    a, a:link, a:visited, a:hover, a:active { text-decoration: none !important; }
    [style*="text-decoration"] { text-decoration: none !important; }
  `;
  const style = document.createElement('style');
  style.id = 'no-decor-no-cursor';
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
})();
