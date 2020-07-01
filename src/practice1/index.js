import getURL from "./utils";
import * as info from "./constant";

const url = getURL(info.ADDRESS, info.PORT, info.PATH);
const region = info.REGION;

export { url, region };
