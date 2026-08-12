import { useContext, useEffect } from 'react';
import { ScrollThresholdContext } from '../layouts/AppLayout';

function Pagsusuri() {
  const { setTopThreshold } = useContext(ScrollThresholdContext);

  useEffect(() => {
    setTopThreshold(15);
  }, [setTopThreshold]);

  return (
    <article className="space-y-10 pb-6 font-display text-base leading-relaxed">
      <div>
        <h1 className="font-handwritten text-4xl font-bold text-(--text)">
          Pagsusuri ng Nobela
        </h1>
        <p className="mt-1 text-sm text-(--text-muted)">Tema, Tauhan, at Simbolismo</p>
      </div>

      {/* Main Analysis Sections */}
      <section className="space-y-6">
        <div>
          <h2 className="font-handwritten text-2xl font-bold tracking-wide text-(--text)">
            1. Kapangyarihan at Katiwalian
          </h2>
          <p className="mt-2 text-sm text-(--text-muted)">
            Ang pangunahing tema ng nobela ay ang kapangyarihan at katiwalian. Ipinakita kung paano maaaring magsimula ang isang mabuting tao sa marangal na layunin ngunit unti-unting maligaw kapag paulit-ulit siyang nakikipagkompromiso.
          </p>
          <p className="mt-2 text-sm text-(--text-muted)">
            Hindi agad naging tiwali si Benny. Nagsimula ito sa maliliit na desisyon: isang pabor, isang pirma, isang pananahimik. Dito nagiging makatotohanan ang nobela sapagkat ipinapakita nitong ang katiwalian ay hindi laging nagsisimula sa isang malaking krimen. Maaari itong magsimula sa isang maliit na pagtalikod sa prinsipyo hanggang sa maging normal na ang mali.
          </p>
        </div>

        <div>
          <h2 className="font-handwritten text-2xl font-bold tracking-wide text-(--text)">
            2. Ang Liwanag at ang Dilim
          </h2>
          <p className="mt-2 text-sm text-(--text-muted)">
            Sa simula, si Benny ang nagsisilbing liwanag para sa San Isidro. Ngunit habang lumalalim ang kaniyang pakikipag-ugnayan sa sindikato, siya mismo ay nilalamon ng dilim. Sa bandang huli, muli niyang hinanap ang liwanag sa pamamagitan ng pagsasabi ng katotohanan.
          </p>
          <blockquote className="my-4 border-l-2 border-(--text-muted) pl-4 italic text-sm text-(--text)">
            &ldquo;Ang apoy ay hindi lamang ginagamit upang magsunog. Maaari rin itong magsilbing ilaw.&rdquo; 
          </blockquote>
          <p className="mt-2 text-sm text-(--text-muted)">
            Ito ay pangako ng paglilingkod; sa wakas, naging kabalintunaan ito nang literal na sunugin ng sindikato ang mga dokumentong naglalaman ng katotohanan.
          </p>
        </div>

        <div>
          <h2 className="font-handwritten text-2xl font-bold tracking-wide text-(--text)">
            3. Si Benny bilang isang Komplikadong Tauhan
          </h2>
          <p className="mt-2 text-sm text-(--text-muted)">
            Si Benny ay hindi inilalarawan bilang ganap na mabuti o ganap na masama. Siya ay isang tragic character—isang taong may mabuting layunin ngunit gumawa ng masasamang desisyon.
          </p>
          <p className="mt-2 text-sm text-(--text-muted)">
            Ang kaniyang pinakamalaking kahinaan ay ang paniniwalang maaari niyang gamitin ang sistema nang hindi siya tuluyang ginagamit nito. Sa simula, iniisip niyang pansamantala lamang ang kaniyang mga kompromiso. Ngunit habang tumatagal, siya na mismo ang nagiging bahagi ng problemang nais niyang lutasin.
          </p>
          <p className="mt-2 text-sm text-(--text-muted)">
            Gayunpaman, mahalaga ring makita na mayroon siyang kakayahang magsisi at managot. Hindi nito binubura ang kaniyang mga kasalanan, ngunit nagbibigay ito sa karakter ng lalim. Ang tunay na pagbabago niya ay hindi nangyari nang manalo siya sa halalan; nangyari ito nang tanggapin niyang kailangan niyang harapin ang bunga ng kaniyang mga ginawa.
          </p>
        </div>
      </section>

      {/* Simbolismo Section */}
      <section className="space-y-6 pt-2">
        <h2 className="font-handwritten text-2xl font-bold tracking-wide text-(--text)">
          Simbolismo sa Nobela
        </h2>

        <div className="space-y-6 text-sm text-(--text-muted)">
          <div>
            <h3 className="font-bold text-(--text)">Liwanag</h3>
            <p className="mt-1">
              Simbolo ng pag-asa, kabutihan, katotohanan, at paninindigan. Sa simula, si Benny ang nagsisilbing liwanag para sa San Isidro, ngunit habang nadadala siya ng kapangyarihan, unti-unti itong nawawala.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-(--text)">Dilim</h3>
            <p className="mt-1">
              Simbolo ng katiwalian, kasakiman, lihim, at pagkawala ng prinsipyo. Kumakatawan ito sa sindikato at sa pagbabago ng pagkatao ni Benny.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-(--text)">Apoy</h3>
            <p className="mt-1">
              Simbolo ng pakikibaka at pagbabago. Noong kabataan ni Benny, ang apoy ay kumakatawan sa kaniyang tapang na lumaban. Sa huli, ang pagsusunog sa mga dokumento ay nagpapakita na maaaring sirain ang ebidensya, ngunit hindi ang katotohanan.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-(--text)">Katahimikan</h3>
            <p className="mt-1">
              Simbolo ng pagwawalang-bahala at pagsang-ayon sa mali. Nang piliing manahimik ni Benny sa harap ng katiwalian, naging bahagi siya ng problemang dati niyang nilalabanan.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-(--text)">EDSA at ang Pagkamatay ni Andoy</h3>
            <p className="mt-1">
              Simbolo ng idealismo, sakripisyo, at pangarap para sa bayan. Ang huling habilin ni Andoy na “Ipagpatuloy mo” ay nagsilbing pangako na patuloy na gumabay kay Benny.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-(--text)">Anino</h3>
            <p className="mt-1">
              Mga nakatagong puwersa ng katiwalian at mga taong kumikilos sa likod ng kapangyarihan.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-(--text)">Pagbabago ni Benny</h3>
            <p className="mt-1">
              Simbolo ng pagbabago ng isang tao: mula sa pagiging idealista, pagkaligaw sa kapangyarihan, hanggang sa pagsisisi at pagtatangkang tubusin ang sarili.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Pagsusuri;