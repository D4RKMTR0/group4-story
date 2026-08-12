function Tauhan() {
  return (
    <article className="space-y-10 pb-6 font-display text-base leading-relaxed">
      <div>
        <h1 className="font-handwritten text-4xl font-bold text-(--text)">
          Mga Tauhan ng Kuwento
        </h1>
        <p className="mt-1 text-sm text-(--text-muted)">Gabay sa mga karakter</p>
      </div>

      {/* Pamilyang Buenavista Section */}
      <section className="space-y-6">
        <h2 className="font-handwritten text-2xl font-bold tracking-wide text-(--text)">
          Pamilyang Buenavista
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-(--text)">Benny Makasalan</h3>
            <p className="mt-1 text-sm text-(--text-muted)">
              Ang pangunahing tauhan. Dating aktibista na naging alkalde ng San Isidro. Nagsimula siyang may mabuting hangarin ngunit naligaw dahil sa kapangyarihan at katiwalian. Sa huli, pinili niyang harapin ang kaniyang mga kasalanan at ilantad ang katotohanan.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-(--text)">Narcissa Ferrer</h3>
            <p className="mt-1 text-sm text-(--text-muted)">
              Asawa ni Benny at ina ng kanilang mga anak. Siya ang nagsisilbing ilaw, sandigan, at simbolo ng pag-asa sa pamilya at sa buhay ni Benny.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-(--text)">Andoy</h3>
            <p className="mt-1 text-sm text-(--text-muted)">
              Matalik na kaibigan ni Benny noong panahon ng EDSA People Power Revolution. Namatay siya habang ipinaglalaban ang kanilang mga paniniwala. Ang kaniyang huling salita na “Ipagpatuloy mo” ang naging mahalagang inspirasyon ni Benny.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-(--text)">Elsie</h3>
            <p className="mt-1 text-sm text-(--text-muted)">
              Anak nina Benny at Narcissa. Ang panganib na nangyari sa kaniya ang naging pagkagising ng konsensya ni Benny at nagtulak sa kaniya na tuluyang talikuran ang sindikato.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-(--text)">Kingly at Bethy</h3>
            <p className="mt-1 text-sm text-(--text-muted)">
              Mga anak nina Benny at Narcissa. Sila ay kumakatawan sa pamilya at kinabukasang nais protektahan ni Benny.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6 pt-2">
        <h2 className="font-handwritten text-2xl font-bold tracking-wide text-(--text)">
          Mga Sindikato
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-(--text)">1. Don Segundo Antonio</h3>
            <p className="mt-1 text-sm text-(--text-muted)">
              Isa sa pinakamakapangyarihang miyembro ng sindikato. Siya ang kumakatawan sa manipulasyon, kapangyarihan, at katiwalian. Siya rin ang nanguna sa pagpapatahimik kay Benny nang tangkain nitong lumaban. Kinakatawan niya ang mapang-api at tiwaling uring naghahari.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-(--text)">2. Angelo Pelaez Nepomuceno</h3>
            <p className="mt-1 text-sm text-(--text-muted)">
              Hango sa “El Filibusterismo” ni Dr. Jose Rizal bilang sakim, social-climbing na negosyanteng Pilipino. Isa pang kasapi ng sindikato na nakipag-ugnayan kay Benny tungkol sa mga proyekto at kasunduang may kapalit. Siya rin ang tauhang nagtangkang pumasok sa silid ni Elsie.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-(--text)">3. Don Benigno Alvarez</h3>
            <p className="mt-1 text-sm text-(--text-muted)">
              Isang politikong labis na tiwali at mahilig magmanipula. Ang kanyang karakter ay nagsisilbing isang nakapangingilabot at makabagong "Satanas sa Lupa" na gumagamit ng kanyang impluwensyang politikal, yaman, at kapangyarihan upang pagsamantalahan ang mga mahihirap at panatilihin ang kontrol sa lipunan.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Tauhan;