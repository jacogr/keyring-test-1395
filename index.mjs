import { Keyring } from '@polkadot/keyring';
import { cryptoWaitReady, mnemonicGenerate } from '@polkadot/util-crypto';

async function main () {
	await cryptoWaitReady();

	const keyring = new Keyring({ type: 'sr25519' });
	const mnemonic = mnemonicGenerate(12);
	const pair = keyring.addFromMnemonic(mnemonic);

	console.log(pair.address);
}

main().finally(process.exit);
