const cdk = require("@aws-cdk/core");
const CdkTextractStack = require("../deployment/custom-deployment/lib/cdk-textract-stack");
const readlineSync = require("readline-sync");

const app = new cdk.App();
const stackName = `${process.env.STACKNAME}Stack`;

const userEmail =
  process.env.USER_EMAIL == "%%USER_EMAIL%%"
    ? readlineSync.question("Please enter your email address: ")
    : process.env.USER_EMAIL;

const isCICDDeploy = process.env.ISCICD == "false" ? false : true;

// // eslint-disable-next-line no-new
new CdkTextractStack.CdkTextractStack(app, stackName, {
  email: userEmail,
  isCICDDeploy: isCICDDeploy
});
