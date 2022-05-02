
const main = document.querySelector('main');

const joke1 = "A lot of things changed when my girlfriend got pregnant. Like my name, my phone number and my address."
const joke2 = "Twitch removed the blind play through tag from their site to be more sensative to blind people. They might have seen it as offensive."
const joke3 = "I thew an anvil down a hole to see how deep it was. Not long after I saw a goat running towards the hole and jumped in. A farmer asked if I had seen the goat and told him it jump in the hole. He told me that's not possible because it was chained to an anvil."

const template = `
<section>
	<h1>My Jokes</h1>
	
	<li>${joke1}</li>
	<li>${joke2}</li>
	<li>${joke3}</li>

</section>
`;
main.innerHTML = template

const body = document.querySelector('body');
const p = document.createElement('p');
p.textContent = "That's all folks!";
body.appendChild(p);