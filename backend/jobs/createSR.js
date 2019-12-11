import { addProcessed } from "../services/db";
import { RETURN_TYPES } from "./index";
import processOpenItems from "../services/jasmin/processOpenItems";

const options = {};

export default {
  key: "create_SR",
  options,
  async handle({ data }, done) {
    console.log("CREATE SR");
    try {
      const {
        companyID,
        sourceDoc,
        discount,
        settled,
        companyKey,
        userID,
        purchasesInvoice,
      } = data;

      const fileID = purchasesInvoice.id;
      console.log("sourcedoc: " + sourceDoc);
      const res = await processOpenItems({
        companyID,
        sourceDoc,
        discount,
        settled,
        companyKey,
        userID,
      });

      const { status } = res;
      console.log("SR CREATION STATUS\t", status);
      if (status === 201) {
        await addProcessed({ userID, fileID });
        console.log("SUCCESS!");
        done(null, {
          value: RETURN_TYPES.END_SUCCESS,
          userID,
          fileID,
          options
        });
      } else {
        done(null, {
          value: RETURN_TYPES.END_ACTION_FAIL,
          status,
          userID,
          fileID,
          options
        })
      }
    } catch (e) {
      if (e.response) {
        console.error(e.response.data);
        done(null, {
          value: RETURN_TYPES.END_ACTION_FAIL,
          data: e.response.data,
          options
        });
      } else {
        console.error(e);
        done(null, {
          value: RETURN_TYPES.END_ACTION_FAIL,
          data: e,
          options
        });
      }
    }
  }
};
