import './tasty-matcher';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace,no-redeclare
  namespace jest {
    interface Matchers<R, T> {
      toMatchTastyShot(snapshotFilename: string, type?: string): R;
    }
  }
}
