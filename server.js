const express = require("express");
const { exec } = require("child_process");
const app = express();
const PORT = 8080;

app.post("/webhook", (req, res) => {
  console.log("Webhook received! Deploying...");

  exec("./deploy.sh", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error during deployment: ${error.message}`);
      return res.status(500).send("Deployment failed");
    }

    console.log(`Deployment successful: ${stdout}`);
    res.status(200).send("Deployment successful");
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
