import React from "react";
import { useSelector } from "react-redux";
import { getAllProjects } from "../features/projectsSlice";
import { useParams } from "react-router-dom";
import {
  CodeBracketIcon,
  EyeIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { getAllSettings } from "../features/settingsSlice";

export default function ProjectDetail() {
  const { settings } = useSelector(getAllSettings);
  const { language } = settings;
  const { projects } = useSelector(getAllProjects);
  const { id } = useParams();
  const project = projects.find((project) => project.id === Number(id));
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <div className="w-full flex justify-between items-start">
        <div className="flex flex-col justify-start items-start gap-5 text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
          <div className="flex items-center justify-center gap-1">
            <h5 className="text-5xl font-semibold">{project.title}</h5>
            <h5 className="text-[#ADB7BE] text-lg">{project.role}</h5>
          </div>
          <p className="text-[#ADB7BE] text-2xl">{project.description}</p>
        </div>
        <div className="items-center justify-center mt-5 bg-[#181818] bg-opacity-80 flex transition-all duration-500">
          <a
            href={project.gitUrl ? project.gitUrl : ""}
            className="h-10 z-1 w-10 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
          >
            <CodeBracketIcon
              className={`${
                project.gitUrl ? "" : "cursor-not-allowed"
              } h-7 w-7 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white`}
            />
          </a>
          <a
            href={project.previewUrl}
            target="_blank"
            className="h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
          >
            <EyeIcon className="h-7 w-7 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
          </a>
        </div>
      </div>
      {language === "tr" ? (
        <div className="flex flex-col justify-start items-start py-40 gap-10 text-xl leading-relaxed font-light text-gray-300 px-10 lg:px-40">
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">API Tasarımı ve Geliştirme</h1>
            <p>
              Projemizdeki API tasarımı,{" "}
              <a href="https://nestjs.com/" className="underline font-bold">
                NestJS
              </a>
              ’in zarif mikroservis mimarisi ile şekillendirilmiştir. Servisler
              arası iletişim için{" "}
              <a
                href="https://tr.wikipedia.org/wiki/TCP"
                className="font-bold underline"
              >
                TCP
              </a>{" "}
              protokolü tercih edilmiş, bu sayede gelecekteki projelere esneklik
              ve yeniden kullanılabilirlik anlamında büyük katkılar
              sağlanmıştır. Her bir mikroservis, tekrar kullanılabilir mikro
              SaaS yapılar olarak geliştirilerek, adeta bir yapı taşı gibi
              dilediğiniz projeye entegre edilebilir niteliktedir. API'ler
              RESTful mimari ile inşa edilmiş, ödeme sistemleri ve e-posta gibi
              işlevler üçüncü parti API'lerle uyumlu bir şekilde çalışacak
              biçimde tasarlanmıştır. Veri alışverişi için JSON formatı
              benimsenmiş, çoklu veritabanı kullanımı ile ise her servise özgü
              en iyi performans sunulmuştur. Örneğin, canlı chat servisi için{" "}
              <a
                href="https://www.mongodb.com/"
                className="underline font-bold"
              >
                MongoDB
              </a>
              ’nin dinamik yapısından yararlanılmıştır. Sistem bütünlüğünü
              koruyan ve tüm istekleri merkezi bir noktadan yöneten bir API
              Gateway yapılandırması kurulmuştur.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">
              Veritabanı Tasarımı ve Yönetimi
            </h1>
            <p>
              Projemizde, çoğunlukla
              <a href="https://www.mysql.com/" className="underline font-bold">
                MySQL
              </a>{" "}
              kullanılmıştır; bunun sebebi sistemin yüksek düzeyde ilişkisel
              veritabanı gereksinimlerini karşılamak ve veri kaybını minimuma
              indirmektir. Belirli servislerde, özellikle dinamik veri yapısına
              sahip olan chat servisi gibi durumlar için MongoDB tercih
              edilmiştir. MongoDB'nin sağladığı esnek yapı, chat gibi sürekli
              değişen verilerin yönetilmesi için idealdir.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">
              Kimlik Doğrulama ve Yetkilendirme
            </h1>
            <p>
              Kimlik doğrulama süreçleri için{" "}
              <a href="https://jwt.io/" className="underline font-bold">
                JWT
              </a>{" "}
              ve{" "}
              <a href="https://nestjs.com/" className="underline font-bold">
                NestJS Passport
              </a>{" "}
              kullanılmıştır. Yetkilendirme işlemleri ise{" "}
              <a href="https://casl.js.org/" className="underline font-bold">
                CASL
              </a>{" "}
              ile güçlendirilmiş, bu sayede servisler arası tekrar
              kullanılabilir bir güvenlik mimarisi oluşturulmuştur. Bu yapı,
              projenin güvenlik standartlarını en üst seviyeye taşımakta büyük
              bir rol oynamaktadır.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">Loglama</h1>
            <p>
              Loglama işlemleri için
              <a
                href="https://www.elastic.co/elastic-stack"
                className="underline font-bold"
              >
                ELK Stack{" "}
              </a>{" "}
              tercih edilmiş,{" "}
              <a
                href="https://www.npmjs.com/package/winston"
                className="underline font-bold"
              >
                Winston
              </a>{" "}
              ve{" "}
              <a
                href="https://www.elastic.co/logstash"
                className="underline font-bold"
              >
                Logstash
              </a>{" "}
              kütüphaneleri ile zenginleştirilmiş bir log yönetim sistemi
              entegre edilmiştir. Bu sistem, projenin sağlıklı bir şekilde
              izlenmesi ve olası hataların hızla tespit edilmesi için kritik
              öneme sahiptir.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">API Güvenliği</h1>
            <p>
              API güvenliği, NestJS’in DTO'ları ile sağlanmaktadır. Bu sayede
              gelen verilerin doğruluğu ve güvenliği en baştan
              garantilenmektedir.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">Performans Optimizasyonu</h1>
            <p>
              Performans iyileştirmeleri için özellikle arama işlemlerinin yoğun
              olduğu sayfalarda{" "}
              <a href="https://redis.io/" className="underline font-bold">
                Redis
              </a>{" "}
              kullanılmıştır. Redis, hızlı veri erişimi ve yüksek performans
              sağlamak için kritik bir bileşendir.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">API Dokümantasyonu</h1>
            <p>
              API dokümantasyonu,{" "}
              <a href="https://swagger.io/" className="underline font-bold">
                Swagger
              </a>{" "}
              aracılığıyla sağlanmış, böylece frontend geliştiriciler için
              kullanımı kolay ve anlaşılır bir referans sunulmuştur.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">DevOps Entegrasyonları</h1>
            <p>
              Sistem,{" "}
              <a href="https://www.docker.com/" className="underline font-bold">
                Docker
              </a>{" "}
              üzerine kurulmuş ve CI/CD işlemleri
              <a
                href="https://github.com/features/actions"
                className="underline font-bold"
              >
                GitHub Actions{" "}
              </a>{" "}
              ile otomatikleştirilmiştir. Bu yapı, sürekli entegrasyon ve
              sürekli teslimat süreçlerini hızlandırmakta ve hata oranını
              düşürmektedir.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">
              Yedekleme ve Felaket Kurtarma
            </h1>
            <p>
              Veritabanı ve sistem yedeklemeleri, Docker ve MySQL kullanılarak
              düzenli olarak gerçekleştirilmektedir. Bu, veri güvenliğini
              maksimize eder ve olası bir felaket anında hızlı bir kurtarma
              imkanı sağlar.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">
              Uluslararasılaştırma ve Yerelleştirme
            </h1>
            <p>
              Çoklu dil desteği, özel olarak hazırlanan bir servis aracılığıyla
              sağlanmakta ve diğer servisler bu yapıyı kullanarak global bir
              kitleye hitap etme kapasitesine kavuşmaktadır.{" "}
              <a
                href="https://www.i18next.com/"
                className="underline font-bold"
              >
                i18n
              </a>{" "}
              kütüphanesi, bu sürecin temel taşını oluşturmaktadır.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">
              Güvenlik Auditi ve Kod İncelemesi
            </h1>
            <p>
              Güvenlik auditleri, özellikle MySQL tablolarında
              gerçekleştirilmekte ve alınan aksiyonlar, yöneticiler ve
              geliştiriciler tarafından detaylı bir şekilde izlenebilmektedir.
              Bu yapı, sistem güvenliğinin sürekli olarak denetlenmesini ve
              güçlendirilmesini sağlar.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center gap-2">
            <h1 className="font-bold text-3xl">ÖĞRENDİKLERİM</h1>
            <p>
              Bu projede elde ettiğim bilgi ve deneyimler, benim için değerli
              bir kariyer yatırımı oldu. Mikroservis mimarisi kullanarak
              sistemin modülerliğini ve esnekliğini artırmayı öğrenmekle
              kalmadım, aynı zamanda bir frontend developer ile senkronize
              şekilde çalışma fırsatı buldum. Bu deneyim, farklı disiplinler
              arası iş birliği yapma ve ortak bir hedef doğrultusunda uyum
              içinde çalışma kabiliyetimi geliştirdi. Yazdığım iş mantığı
              (business logic) sayesinde, algoritma ve veri yönetimi
              yeteneklerim ciddi anlamda gelişti. Kriz anlarında servislerin
              yerine yedek servisleri devreye sokma pratiği kazandım, bu sayede
              sistem dayanıklılığını artırma ve olası aksamaları minimuma
              indirme konusunda önemli deneyimler edindim. Ayrıca, projeye yeni
              özellikler eklerken gösterdiğim hız ve etkinlik, süreçlerin ne
              kadar hızlı ve verimli yürütülebileceği konusunda bana yeni
              perspektifler sundu. Geliştiriciler için de büyük faydalar
              sağlayan mikroservis yapısı, kod çakışmalarını engelleyerek her
              birimizin üzerinde çalıştığı modülde daha verimli olmasını
              sağladı. Bu yapı, aynı zamanda bazı servislerin mikro SaaS olarak
              tasarlanmasını ve bu servislerin başka projelerde yeniden
              kullanılabilmesini sağlayarak, kaynakların daha verimli
              değerlendirilmesine olanak tanıdı. Her biri, hem bireysel hem de
              ekip olarak gelişimime katkıda bulunan bu deneyimler, gelecekteki
              projelerde ve kariyer yolculuğumda üzerine inşa edeceğim sağlam
              bir temel oluşturdu. Bu projede karşılaştığım zorluklar, problem
              çözme yeteneklerimi geliştirmeme ve daha yaratıcı çözümler
              üretmeme olanak tanıdı, ve bu yetenekler gelecekte beni daha da
              donanımlı bir profesyonel yapacak.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center gap-2">
            <h1 className="font-bold text-3xl">PROJENİN SONUÇLARI</h1>
            <p>
              Proje, planlandığı gibi başarılı bir şekilde tamamlanarak
              hedeflenen sonuçlara ulaştı. Geliştirilen mikroservis mimarisi
              sayesinde, sistemimizin dayanıklılığı önemli ölçüde artırıldı.
              Herhangi bir hata durumunda sadece etkilenen servislerin durması
              sağlanırken, diğer servislerin faaliyetlerine devam etmesi garanti
              altına alındı. Bu yaklaşım, sistem çapında potansiyel aksamaların
              önüne geçilmesine büyük katkı sağladı. Mikroservislerin modüler
              yapısı, geliştiriciler için de büyük faydalar sundu.
              Geliştiriciler, projenin farklı bölümleri üzerinde bağımsız olarak
              çalışabildi, bu da kod çakışmalarını engelledi ve iş birliğini
              kolaylaştırdı. Ayrıca, bazı mikroservisler mikro SaaS olarak
              tasarlanarak, bu servislerin başka projelerde de yeniden
              kullanılabilmesi amaçlandı. Bu yeniden kullanım, kaynakların daha
              verimli şekilde değerlendirilmesini sağlayarak, yeni projelerin
              geliştirme sürelerini ve maliyetlerini önemli ölçüde azalttı.
              API'lerin RESTful standartlara uygun olarak geliştirilmesi,
              sistemin dış bağlantılarla etkileşimini kolaylaştırdı ve
              entegrasyon süreçlerini hızlandırdı. Veritabanı yönetimi ve çoklu
              veritabanı kullanımı, sistem performansını optimize etti ve veri
              kaybını minimize etti. Kimlik doğrulama ve yetkilendirme
              mekanizmalarının güçlendirilmesi, sistem güvenliğini önemli ölçüde
              artırdı. Ayrıca, uluslararasılaştırma ve yerelleştirme
              çalışmaları, projenin farklı coğrafyalardaki kullanıcılar
              tarafından kolayca adapte edilmesini sağladı. Bu sonuçlar,
              projenin başarısının açık bir göstergesi olup, ekip olarak bizlere
              gelecekte benzer başarıları tekrarlayabilme konusunda güven
              vermektedir. Bu başarılar, projenin sürekliliğini ve teknolojik
              ilerlemesini sağlamak için temel teşkil etmektedir.
            </p>
          </div>{" "}
          <div className="flex flex-col justify-start items-center gap-2">
            <h1 className="font-bold text-3xl">
              PROJENİN GELECEĞİ VE İHTİYAÇLARI
            </h1>
            <p>
              Projeyi daha da ileriye taşımak için, sistem altyapısını ve
              performansını güçlendirecek birkaç kritik adım öngörülmektedir.
              İlk olarak, sistemin iletişim ve koordinasyon kabiliyetini
              artırmak amacıyla bir message broker olarak{" "}
              <a
                className="font-bold underline"
                href="https://www.rabbitmq.com/"
              >
                RabbitMQ
              </a>
              'nun entegrasyonu planlanmaktadır. Bu entegrasyon, mikroservisler
              arası mesajlaşmayı daha verimli hale getirerek, sistem genelindeki
              veri akışını ve işlemleri hızlandıracaktır. İkinci olarak, API
              geliştirme sürecinde GraphQL kullanımına geçilmesi önerilmektedir.{" "}
              <a className="font-bold underline" href="https://graphql.org/">
                GraphQL
              </a>
              , istemcilerin ihtiyaç duydukları verileri daha esnek bir şekilde
              sorgulamalarına olanak tanıyarak, veri alışverişini optimize etmek
              ve ağ yükünü azaltmak için mükemmel bir çözümdür. Ayrıca,
              GraphQL'in veritabanı ile olan etkileşimlerde sunduğu avantajlar
              göz önünde bulundurularak, mevcut veritabanı yapısının{" "}
              <a className="font-bold underline" href="https://graphql.org/">
                GraphQL
              </a>{" "}
              ile daha uyumlu hale getirilmesi, sistemin performansını ve veri
              yönetimini iyileştirecek önemli bir adım olarak
              değerlendirilmektedir. Bu teknolojik geçişler, projenin sürekli
              büyüyen ihtiyaçlarını daha etkin bir şekilde karşılamak ve
              kullanıcı deneyimini iyileştirmek adına hayati öneme sahiptir. Son
              olarak, bu yeni gereksinimler doğrultusunda, ekibin
              yetkinliklerinin artırılması ve yeni yeteneklerin projeye dahil
              edilmesi gerekmektedir. Bu şekilde yazılan paragraf, projenin
              mevcut durumunu ve gelecekteki teknolojik ihtiyaçlarını detaylı
              bir şekilde ele almakta, aynı zamanda bu ihtiyaçların projeye
              nasıl entegre edilebileceği konusunda yol göstermektedir.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-start items-start py-40 gap-10 text-xl leading-relaxed font-light text-gray-300 px-40">
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">API Design and Development</h1>
            <p>
              Our project's API design has been shaped with the elegant
              microservice architecture of
              <a href="https://nestjs.com/" className="underline font-bold">
                NestJS
              </a>
              . The
              <a
                href="https://en.wikipedia.org/wiki/Transmission_Control_Protocol"
                className="font-bold underline"
              >
                TCP
              </a>{" "}
              protocol was chosen for inter-service communication, which has
              greatly contributed to flexibility and reusability for future
              projects. Each microservice has been developed as reusable micro
              SaaS structures, making them integratable building blocks for any
              desired project. The APIs have been built following RESTful
              architecture, designed to work compatibly with third-party APIs
              for functionalities such as payment systems and email. JSON format
              has been adopted for data exchange, and multiple databases have
              been used to ensure the best performance specific to each service.
              For example, the dynamic structure of
              <a
                href="https://www.mongodb.com/"
                className="underline font-bold"
              >
                MongoDB
              </a>{" "}
              has been utilized for the live chat service. An API Gateway
              configuration that preserves system integrity and manages all
              requests from a central point has been established.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">
              Database Design and Management
            </h1>
            <p>
              In our project,
              <a href="https://www.mysql.com/" className="underline font-bold">
                MySQL
              </a>{" "}
              has been predominantly used; this is because the system needed a
              highly relational database to meet requirements and minimize data
              loss. In certain services, especially in situations involving
              dynamic data structures like the chat service, MongoDB has been
              the preferred choice. MongoDB's flexible structure is ideal for
              managing continuously changing data like chat.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">
              Authentication and Authorization
            </h1>
            <p>
              For authentication processes,
              <a href="https://jwt.io/" className="underline font-bold">
                JWT
              </a>{" "}
              and
              <a href="https://nestjs.com/" className="underline font-bold">
                NestJS Passport
              </a>{" "}
              have been used. Authorization procedures have been strengthened
              with
              <a href="https://casl.js.org/" className="underline font-bold">
                CASL
              </a>
              , thus creating a reusable security architecture across services.
              This structure plays a significant role in elevating the project's
              security standards to the highest level.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">Logging</h1>
            <p>
              For logging processes, the
              <a
                href="https://www.elastic.co/elastic-stack"
                className="underline font-bold"
              >
                ELK Stack
              </a>{" "}
              was chosen, enriched with
              <a
                href="https://www.npmjs.com/package/winston"
                className="underline font-bold"
              >
                Winston
              </a>{" "}
              and
              <a
                href="https://www.elastic.co/logstash"
                className="underline font-bold"
              >
                Logstash
              </a>{" "}
              libraries to integrate a comprehensive log management system. This
              system is crucial for monitoring the project's health and rapidly
              detecting any potential errors.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">API Security</h1>
            <p>
              API security is ensured through NestJS's DTOs. This guarantees the
              integrity and security of incoming data from the outset.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">Performance Optimization</h1>
            <p>
              Performance enhancements, especially on pages with intense search
              operations, have been supported by using
              <a href="https://redis.io/" className="underline font-bold">
                Redis
              </a>
              . Redis is a critical component for fast data access and high
              performance.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">API Documentation</h1>
            <p>
              API documentation has been provided through
              <a href="https://swagger.io/" className="underline font-bold">
                Swagger
              </a>
              , offering an easy-to-understand reference for frontend
              developers.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">DevOps Integrations</h1>
            <p>
              The system has been set up on
              <a href="https://www.docker.com/" className="underline font-bold">
                Docker
              </a>{" "}
              and CI/CD processes have been automated through
              <a
                href="https://github.com/features/actions"
                className="underline font-bold"
              >
                GitHub Actions
              </a>
              . This structure accelerates continuous integration and delivery
              processes and reduces the error rate.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">Backup and Disaster Recovery</h1>
            <p>
              Database and system backups are regularly performed using Docker
              and MySQL. This maximizes data security and provides a quick
              recovery option in the event of a disaster.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">
              Internationalization and Localization
            </h1>
            <p>
              Multilingual support is provided through a specially prepared
              service, allowing other services to cater to a global audience.
              The
              <a
                href="https://www.i18next.com/"
                className="underline font-bold"
              >
                i18n
              </a>{" "}
              library is a cornerstone of this process.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="font-bold text-2xl">
              Security Audit and Code Review
            </h1>
            <p>
              Security audits are primarily conducted on MySQL tables, and the
              actions taken are closely monitored by administrators and
              developers. This structure ensures continuous monitoring and
              strengthening of system security.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center gap-2">
            <h1 className="font-bold text-3xl">WHAT I LEARNED</h1>
            <p>
              The knowledge and experience I gained from this project have been
              a valuable career investment for me. I not only learned to
              increase the system's modularity and flexibility using
              microservice architecture, but I also had the opportunity to work
              synchronously with a frontend developer. This experience enhanced
              my ability to collaborate across disciplines and work harmoniously
              towards a common goal. The business logic I wrote significantly
              improved my algorithm and data management skills. I gained
              practice in deploying backup services during crisis moments, thus
              enhancing system resilience and minimizing potential disruptions.
              Additionally, the speed and efficiency I demonstrated while adding
              new features to the project offered me new perspectives on how
              processes could be carried out swiftly and productively. The
              microservice structure, which also provides significant benefits
              for developers, prevented code conflicts, allowing each of us to
              be more efficient in the modules we worked on. This structure also
              enabled some services to be designed as micro SaaS and reused in
              other projects, allowing more efficient resource utilization.
              These experiences, each contributing to my personal and team
              development, have formed a solid foundation that I will build upon
              in future projects and my career journey. The challenges I
              encountered in this project allowed me to enhance my
              problem-solving skills and develop more creative solutions, making
              me a more equipped professional for the future.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center gap-2">
            <h1 className="font-bold text-3xl">PROJECT OUTCOMES</h1>
            <p>
              The project was successfully completed as planned, achieving the
              targeted outcomes. The developed microservice architecture
              significantly enhanced the resilience of our system. Only the
              affected services were halted in any error situation, while the
              rest continued their operations, which greatly prevented potential
              system-wide disruptions. The modular nature of the microservices
              also provided great benefits for developers. Developers were able
              to work independently on different parts of the project, which
              prevented code conflicts and facilitated collaboration.
              Additionally, some microservices were designed as micro SaaS, with
              the intention of reusing these services in other projects. This
              reuse allowed more efficient resource utilization, significantly
              reducing development time and costs for new projects. The
              development of APIs in compliance with RESTful standards
              facilitated the system's interaction with external connections and
              sped up integration processes. Database management and the use of
              multiple databases optimized system performance and minimized data
              loss. Strengthening authentication and authorization mechanisms
              significantly improved system security. Furthermore,
              internationalization and localization efforts enabled users from
              different geographies to easily adapt the project. These results
              clearly demonstrate the success of the project and provide us with
              the confidence to replicate similar successes in the future. These
              achievements form the foundation for the continuity and
              technological advancement of the project.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center gap-2">
            <h1 className="font-bold text-3xl">
              FUTURE OF THE PROJECT AND ITS NEEDS
            </h1>
            <p>
              To further advance the project, several critical steps are
              anticipated to strengthen the system infrastructure and
              performance. Firstly, the integration of RabbitMQ as a message
              broker is planned to enhance communication and coordination
              capabilities within the system. This integration will make
              inter-service messaging more efficient, accelerating data flow and
              operations across the system. Secondly, it is recommended to
              transition to using GraphQL in the API development process.
              GraphQL allows clients to query the data they need more flexibly,
              optimizing data exchange and reducing network load. Considering
              the advantages GraphQL offers in database interactions, making the
              existing database structure more compatible with GraphQL is
              considered an important step to improve system performance and
              data management. These technological transitions are vital to more
              effectively meet the project's growing needs and improve user
              experience. Lastly, in line with these new requirements, enhancing
              the team's skills and incorporating new talents into the project
              is necessary. This detailed paragraph addresses the current state
              of the project and its future technological needs, providing
              guidance on how these needs can be integrated into the project.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
