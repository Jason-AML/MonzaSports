import { getTestDriveWithRelations } from "../service/vehicleService";

export const notifiTestDrive = async (testDriveId, userEmail) => {
  try {
    const testDriveData = await getTestDriveWithRelations(
      testDriveId,
      userEmail,
    );

    const response = await fetch(
      "https://jasonaml.app.n8n.cloud/webhook/14cc3a3f-6052-4740-9597-7aef8b2131b5",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testDriveData),
      },
    );

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Webhook error ${response.status}: ${text}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};
