const config = {
    // máximo de 150 caracteres
    nameDescription: "Somos uma agência especializada no desenvolvimento de sites institucionais e landing pages profissionais. Localizados no Vale do Paraíba – SP, atendemos empresas de todo o Brasil com soluções digitais modernas, responsivas e focadas em resultados para fortalecer sua presença online.",
    nameKeywords: "desenvolvimento de sites, criação de sites, sites institucionais, landing pages, agência digital, Vale do Paraíba, São Paulo, sites responsivos, marketing digital, design web",
    siteTitle: "Marthec | Site p/ seu negócio",
    
    ogURL: "https://www.marthec.com.br",

    contactEmail: "contato@marthec.com",
    contactFone: "5512991367024",
    contactFacebook: "https://www.facebook.com/marthec",
    contactInstagram: "https://www.instagram.com/marthec.web",
    contactLinkedin: "",
    contactWhatsapp: "5512991367024",

    bairro: "Centro",
    cidade: "Pindamonhangaba",
    estado: "São Paulo",
    cep: "12410-230",

    bg_1: "#1a2730",
    bg_2: "#b0cee2",
    bg_3: "#45586c",
    font_clara: "#f5f5f5",
    font_escura: "#050505",
    font_altern: "#054896",
    btn_1: "#054896",
    btn_2: "#457812",
    btn_3: "#054896",
    btn_primaryhover: "#f8cc53",
    btn_primary: "#e7ad0c",

    // Daqui para baixo é automático
    favicon: "/favicon.png",
    logo: "/logo.png",
    ogTitle: "Marthec",
    ogDescription: "",
    
    businessInfo: {
        "@context": "https://schema.org",
        "@type": "Pindamonhangaba - São Paulo",
        "name": "Marthec",
        "description": "Testando paraametros de head",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Centro",
          "addressLocality": "Pindamonhangaba",
          "addressRegion": "São Paulo",
          "postalCode": "12410-230",
          "addressCountry": "BR"
        },
        "telephone": "",
        "url": "https://www.marthec.com.br",
        "logo": "logo.png",
        "sameAs": [
          "",
          ""
        ]
    }
    
  };

  config.businessInfo.url = config.ogURL;
  config.businessInfo.name = config.siteTitle;
  config.businessInfo.description = config.nameDescription;
  config.businessInfo.telephone = config.contactFone;
  config.businessInfo.logo = config.logo;
  config.businessInfo.sameAs = [config.contactFacebook, config.contactInstagram,config.contactLinkedin,config.contactWhatsapp];
  config.businessInfo.address.streetAddress = config.bairro;
  config.businessInfo.address.addressLocality = config.cidade;
  config.businessInfo.address.addressRegion = config.estado;
  config.businessInfo.address.postalCode = config.cep;

  export default config;