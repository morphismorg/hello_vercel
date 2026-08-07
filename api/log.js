export default async function handler(req, res) {
    try {
        await fetch("http://192.210.233.133:23254/log", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                url: req.url,
                method: req.method,
                headers: req.headers,
                query: req.query
            })
        });
    } catch (e) {
        console.error(e);
    }

    res.status(200).send("OK");
}
