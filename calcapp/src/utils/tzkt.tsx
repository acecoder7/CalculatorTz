
import axios from "axios";

export const fetchStorage = async () => {
    const res = await axios.get("https://api.ghostnet.tzkt.io/v1/contracts/KT1SdX3v58uynUceqPkCCFY7Hn1AfnixRhHx/storage");
    return res.data;
};