<template>
  <div>
    <section class="section">
    <div class="about-page">
      <div class="container">
        <figure class="avatar">
          <img src="https://nicotukiainen.com/legacy/images/portrait3.jpg">
        </figure>
          <p>Hello! My name is Nico Tukiainen. I am a Finnish Software Developer and I work for a Swedish company called Pagero. At Pagero we help companies streamline and digitalise their business processes and we aim to become the largest network between businesses worldwide. Learn more at <a href="https://www.pagero.com/">pagero.com</a>.
          <hr/>
          <p>I have only been working in the IT since October 2018 and before that I worked in the restaurant industry for 13 years. I am still quite novice but I'm lucky enough to be working with a team of very skilled and helpful Developers / Engineers. 
          Throughout my life, I have acquired advanced technical knowledge and that has helped me adapt to these new challenges.
          That being said, I am also an avid PC gamer. My favorite games of all time include such as Quake 2 (especially ActionQuake 2 -mod), Diablo series, World of Warcraft, Overwatch.</p>
          <hr/>
          <p>I also get excited about things easily, especially about technology. My long-term interests include programming, web design, 3d modeling, user experience, good food, martial arts, travelling, music and aforementioned PC gaming. I also enjoy an occasional craft beer or two every now and then.</p>
          <p>I am currently writing my Thesis on Business IT in Haaga-Helia University of Applied Sciences about development and deployment of a Web component library for a case company.</p>
        </div>
    </div>
    </section>
  <Footer/>
  </div>
</template>

<script>
import Footer from '~/components/shared/Footer'
export default {
  head: {
    title: 'Learn more about Nico Tukiainen | Nico Tukiainen'
  },
  components: {
    Footer
  }
}
</script>

 <style scoped lang="scss">
  .hero-footer.footer.footer-custom{
    position: absolute !important; 
    bottom: 0!important; 
    width: 100%!important;  
  }
  .about-page {
    flex: 1;
    padding-top: 80px;
    position: relative;
    max-width: 800px;
    margin: 0 auto 5rem auto;
    font-size: 1.1rem;
    text-align: justify;
    text-justify: inter-word;

    //tablets, big phones
    @media only screen and (min-width: 600px) {
      padding-left: 40px;
      padding-right: 40px;
    }

    // xs-devices, phones
    @media only screen and (max-width: 600px) {
      padding-left: 40px;
      padding-right: 40px;
    }
  }
  .avatar {
    margin-right: 20px;
    float: left;
  }
  .avatar img {
    height: 128px;
    width: 128px;
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  }
</style>