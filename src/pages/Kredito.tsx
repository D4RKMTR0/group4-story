import { useContext, useEffect } from 'react';
import { ScrollThresholdContext } from '../layouts/AppLayout';

function Kredito() {
  const { setTopThreshold } = useContext(ScrollThresholdContext);

  useEffect(() => {
    setTopThreshold(15);
  }, [setTopThreshold]);

  const contributors = [
    {
      name: 'Maria Fenelly C. David',
      roles: [
        'Paggawa ng Unang Kabanata',
        'Paglikha ng pisikal na libro',
        'Pagtulong sa pagbabalangkas ng daloy ng kwento at plot',
      ],
    },
    {
      name: 'Stella Cassandra R. De Jesus',
      roles: [
        'Paggawa ng Ikalawang Kabanata',
        'Paglikha ng Cover',
        'Pagbibigay pangalan at kahulugan sa mga tauhan',
      ],
    },
    {
      name: 'Samantha Kathalea Y. Juson',
      roles: [
        'Pagbalangkas ng mga pangyayari at dayalogo',
        'Paggawa ng Ikalimang Kabanata',
      ],
    },
    {
      name: 'Elisha Jasmine V. Laurito',
      roles: [
        'Paggawa ng Ikaapat na Kabanata',
        'Pagbalangkas ng daloy ng kuwento at plot',
        'Pagtulong sa Cover',
      ],
    },
    {
      name: 'Brent Adrian M. Fogarty',
      roles: [
        'Paglikha ng digital website para sa Buod, Paliwanag, Pagsusuri, at mga Kontribusyon',
      ],
    },
    {
      name: 'Eishan Quiel J. Oliveros',
      roles: [
        'Paggawa ng Ikatlong Kabanata',
        'Pagtulong sa Cover',
      ],
    },
  ];

  return (
    <article className="space-y-10 pb-6 font-display text-base leading-relaxed">
      <div>
        <h1 className="font-handwritten text-4xl font-bold text-(--text)">
          Mga Kredito
        </h1>
        <p className="mt-1 text-sm text-(--text-muted)">Mga taong gumawa ng kuwentong ito</p>
      </div>

      <section className="space-y-8">
        {contributors.map((person, index) => (
          <div key={index} className="space-y-1">
            <h2 className="font-handwritten text-2xl font-bold tracking-wide text-(--text)">
              {person.name}
            </h2>
            <ul className="space-y-1 text-sm text-(--text-muted)">
              {person.roles.map((role, rIndex) => (
                <li key={rIndex}>• {role}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </article>
  );
}

export default Kredito;