export default async function handler(req, res) {

    await fetch("http://192.210.233.133:23254/log", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            url: req.url,
            method: req.method,
            headers: req.headers
        })
    });

    res.status(200).send("OK");
}
