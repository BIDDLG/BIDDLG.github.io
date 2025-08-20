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
        
