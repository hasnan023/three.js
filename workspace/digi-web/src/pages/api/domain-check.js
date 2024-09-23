// pages/api/domain-check.js
import axios from "axios";

export default async function handler(req, res) {
  const { domain } = req.query;

  if (!domain) {
    return res.status(400).json({ error: "Domain is required" });
  }

  try {
    console.log(domain);
    console.log(
      "Authorization:",
      `sso-key 3mM44UdC71uh5C_H5DKoQEvhEgX2oowVmqZ5P:7NPPGvbfQYBYQsi4TLSPCc`
    );

    const response = await axios.get(
      `https://api.ote-godaddy.com/v1/domains/available?domain=${domain}`,
      {
        headers: {
          Authorization: `sso-key 3mM44UdC71uh5C_H5DKoQEvhEgX2oowVmqZ5P:7NPPGvbfQYBYQsi4TLSPCc`,
        },
      }
    );
    console.log("API Response:", response.data);

    return res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching domain status:", error);
    return res.status(500).json({ error: "Error checking domain" });
  }
}
