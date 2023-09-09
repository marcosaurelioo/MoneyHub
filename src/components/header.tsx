export function Header() {
  return (
    <header className="flex items-center justify-center flex-wrap gap-10 p-10 border-b border-neutral-200">
      <h1 className="font-semibold text-2xl">MoneyHUB</h1>

      {/* <div className="flex flex-wrap gap-6">
        <Link href="/">
          <span className="text-neutral-500 text-base font-medium">
            Crypto Currencies
          </span>
        </Link>

        <Link href="/fiat-currencies">
          <span className="text-neutral-500 text-base font-medium">
            Fiat Currencies
          </span>
        </Link>
      </div> */}
    </header>
  );
}
