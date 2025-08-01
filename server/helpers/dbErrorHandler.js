// server/helpers/dbErrorHandler.js
const getUniqueErrorMessage = (err) => {
  let output;
  try {
    let fieldName = err.message.substring(
      err.message.lastIndexOf(".$") + 2,
      err.message.lastIndexOf("_1")
    );
    output =
      fieldName.charAt(0).toUpperCase() +
      fieldName.slice(1) +
      " already exists";
  } catch (ex) {
    output = "Unique field already exists";
  }
  return output;
};

const getErrorMessage = (err) => {
  let message = "";

  // MongoDBエラーコード対応
  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = getUniqueErrorMessage(err);
        break;
      default:
        message = "Something went wrong";
    }
  } else if (err.errors) {
    // Mongoose バリデーションエラー処理
    for (let errName in err.errors) {
      if (err.errors[errName].message) {
        message = err.errors[errName].message;
      }
    }
  }
  else {
    message = err.message || "Unknown error occurred";
  }

  return message;
};

export default { getErrorMessage };
