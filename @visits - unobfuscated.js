const SUPA_URL = "https://fprdleviirppryxtimnh.supabase.co";
const SUPA_KEY = "sb_publishable_23HphslyQGgemY-Lc9Zo_w_VHsvALX6"; // safe for browser
const TABLE = "ProjectsStats";
const KEY_NAME = "QP Website Views";

window.addEventListener("load", () => {
    incrementSupabaseVisits();
});

async function incrementSupabaseVisits() {
	// GET the existing row
	const getUrl = `${SUPA_URL}/rest/v1/${TABLE}?KeyName=eq.${encodeURIComponent(KEY_NAME)}`;

	const getRes = await fetch(getUrl, {
		method: "GET",
		headers: {
		"apikey": SUPA_KEY,
		"Authorization": `Bearer ${SUPA_KEY}`
		}
	});

	const data = await getRes.json();

	// If row exists → PATCH increment
	if (data.length > 0) {
		const currentValue = data[0].Value;
		const patchUrl = `${SUPA_URL}/rest/v1/${TABLE}?KeyName=eq.${encodeURIComponent(KEY_NAME)}`;

		await fetch(patchUrl, {
			method: "PATCH",
			headers: {
				"apikey": SUPA_KEY,
				"Authorization": `Bearer ${SUPA_KEY}`,
				"Content-Type": "application/json",
				"Prefer": "return=minimal"
			},
			body: JSON.stringify({
				Value: currentValue + 1
			})
		});

		// console.log("incremented visits ", currentValue + 1);
		return;
	}
}
