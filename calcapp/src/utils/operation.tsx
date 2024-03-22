// TODO 6 - Call buy_ticket entrypoint in the Lottery contract by completing buyTicketOperation

import { tezos } from "./tezos";

export const multiplyOperation = async (x: number, y: number) => {
  try {
    const contract = await tezos.wallet.at(
      "KT1SdX3v58uynUceqPkCCFY7Hn1AfnixRhHx"
    );
    const op = await contract.methods.multiply(x, y).send();
    await op.confirmation(1);
  } catch (error) {
    throw error;
  }
};

export const addOperation = async (x: number, y: number) => {
  try {
    const contract = await tezos.wallet.at(
      "KT1SdX3v58uynUceqPkCCFY7Hn1AfnixRhHx"
    );
    const op = await contract.methods.add(x, y).send();
    await op.confirmation(1);
  } catch (error) {
    throw error;
  }
};

export const squareOperation = async (x: number) => {
  try {
    const contract = await tezos.wallet.at(
      "KT1SdX3v58uynUceqPkCCFY7Hn1AfnixRhHx"
    );
    const op = await contract.methods.square(x).send();
    await op.confirmation(1);
  } catch (error) {
    throw error;
  }
};

export const squareRootOperation = async (x: number) => {
  try {
    const contract = await tezos.wallet.at(
      "KT1SdX3v58uynUceqPkCCFY7Hn1AfnixRhHx"
    );
    const op = await contract.methods.squareRoot(x).send();
    await op.confirmation(1);
  } catch (error) {
    throw error;
  }
};

export const factorialOperation = async (x: number) => {
  try {
    const contract = await tezos.wallet.at(
      "KT1SdX3v58uynUceqPkCCFY7Hn1AfnixRhHx"
    );
    const op = await contract.methods.factorial(x).send();
    await op.confirmation(1);
  } catch (error) {
    throw error;
  }
};

export const log2Operation = async (x: number) => {
  try {
    const contract = await tezos.wallet.at(
      "KT1SdX3v58uynUceqPkCCFY7Hn1AfnixRhHx"
    );
    const op = await contract.methods.log2(x).send();
    await op.confirmation(1);
  } catch (error) {
    throw error;
  }
};