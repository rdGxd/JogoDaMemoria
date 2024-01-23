export const Winner = () => {
  const handleResetGame = () => {
    window.location.reload();
  };

  return (
    <div className="">
      <img
        src="/image/web.svg"
        alt=""
        className="absolute left-[260px] h-14 w-14"
      />
      <div className="content-center items-center justify-center rounded-xl bg-dark-10 p-6 text-center">
        <h2 className="font-October text-3xl text-brand-color-light">BUUH!!</h2>
        <p className="my-6 font-OpenSans  text-white">
          Parabéns, você terminou esse jogo da memória.
        </p>
        <button
          onClick={handleResetGame}
          type="button"
          className="rounded border border-brand-color bg-[#2B0E11] px-11 py-2 font-OpenSans text-white"
        >
          Jogar novamente
        </button>
      </div>
    </div>
  );
};
