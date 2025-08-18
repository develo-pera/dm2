import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: "us2",
});

type Interests = keyof typeof INTERESTS;

export const INTERESTS = {
  TOKENS: "b91fc0b8db",
  SQUARE_DECIMETERS: "25e3b440aa",
  BOTH: "0318f2b23b",
};

const LIST_ID = "b07f514514";

export const pingMailchimp = async () => {
  try {
    const response = await mailchimp.ping.get();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const subscribeToMailchimp = async (email: string, interestedIn?: Interests, investmentAmount?: number, name?: string, surname?: string, phone?: string) => {
  const interests = interestedIn ? {
    [INTERESTS[interestedIn]]: true,
  } : {};

  try {
    const response = await mailchimp.lists.addListMember(LIST_ID, {
      email_address: email,
      status: "subscribed",
      interests,
      merge_fields: {
        "INVESTMENT": investmentAmount,
        "NAME": name,
        "LNAME": surname,
        "PHONE": phone,
      },
    });
    console.log("response", response);
    return response;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};