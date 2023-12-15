<script>
// Wait for Memberstack to be fully loaded before running your code
setTimeout(function() {
  const memberstack = window.$memberstackDom;
  document.querySelectorAll('.track').forEach(form => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent the default form submission
      const member = await memberstack.getMemberJSON();
      let count = 0;
      console.log("memberJSON", member)
      // If the member has a formSubmissions object, get the count
      if (member.data !== null && member.data.formSubmissions) {
        count = member.data.formSubmissions.count || 0;
      }
      // Increment the count by 1 without overriding all other data
      const newJSON = {
        ...member.data,
        formSubmissions: {
          count: count + 1
        }
      };
      console.log("newJSON", newJSON)
      await memberstack.updateMemberJSON({
        json: newJSON
      });
    });
  });
}, 1000);
</script>

<script>
// Select the form element and the loader elements 
const form = document.querySelector('#generate-form');
const resultWrap = document.querySelector('#statement-component');
const resultLoader = document.querySelector('#statement-loader');
const resultText = document.querySelector('#statement-text');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Show the div that will contain the response and scroll to it
    resultWrap.style.display = "block";
    resultLoader.style.display = "flex";
    resultWrap.scrollIntoView({behavior: "smooth"});
    
    // Get the values of the form fields
    const serviceRendered = document.getElementById('serviceRendered').value;
    const settingService = document.getElementById('settingService').value;
    const incidentShift = document.getElementById('incidentShift').value;
    const observations = document.getElementById('observations').value;
    const community = document.getElementById('community').value;
   
    
    // Get the values of the form fields
    const keyword = document.getElementById('keyword').value;
    const company = document.getElementById('company').value;
    const niche = document.getElementById('niche').value;
    
    // Create the prompt string using the form field values
    const prompt = `Generate an SEO friendly H1 for a company called ${company} in the ${niche} industry to rank for the keyword ${keyword}`;
	
		// Make an API call to our Make cenario
    fetch('https://hook.us1.make.com/1bc2q54lre4x2mrcn8punyzmq70pkha5', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
        	prompt: prompt, 
          max_tokens: 256
        })https://gistcdn.githack.com/drisdimes/690d2764da4b2d105b595875ad0d5b11/raw/7f09c22d2f7511c441e7f35d7d8ef4ca1cf4c646/gistfile1.txt
    })
    // Then get the API response object, covert it to text and display it
    .then(response => response.text())
    .then(result => {
    	resultText.value = result;
    	resultLoader.style.display = "none";
    });   
});
></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://gistcdn.githack.com/drisdimes/690d2764da4b2d105b595875ad0d5b11/raw/cdc476152b46eb641741b33ec161d6d7f3a3dded/script.js"></script>
