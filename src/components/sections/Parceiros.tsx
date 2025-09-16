import React from 'react';
import Image from 'next/image';

const parceiros = [
    {
        nome: 'Parceiro 1',
        logo: '/images/parceiro1.png',
        site: 'https://parceiro1.com',
    },
    {
        nome: 'Parceiro 2',
        logo: '/images/parceiro2.png',
        site: 'https://parceiro2.com',
    },
    {
        nome: 'Parceiro 3',
        logo: '/images/parceiro3.png',
        site: 'https://parceiro3.com',
    },
];

const Parceiros: React.FC = () => (
    <section id="parceiros" style={{ padding: '3rem 0', background: '#f9f9f9' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Nossos Parceiros</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                {parceiros.map((parceiro) => (
                    <a
                        key={parceiro.nome}
                        href={parceiro.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: 'inherit',
                            width: 180,
                        }}
                    >
                        <Image
                            src={parceiro.logo}
                            alt={parceiro.nome}
                            width={120}
                            height={80}
                            style={{ objectFit: 'contain', marginBottom: 12 }}
                        />
                        <span>{parceiro.nome}</span>
                    </a>
                ))}
            </div>
        </div>
    </section>
);

export default Parceiros;