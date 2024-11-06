import './Varanasi.css'
import axios from "axios";
import { useState,useEffect } from "react";
import varImg from "./varanasi.jpg";

const Varanasi = () => {
    const [weather , setWeather] = useState({});

    const getWeather = async()=>{
      const apiKey = "6878cd3100340f7ce9be193e607be769";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${'varanasi'}&appid=${apiKey}`;
      try{
         const response = await axios.get(url);
         console.log(response.data)
         setWeather(response.data)
        }
        catch(error){
          console.log('error getting data',err)
        }
      }
      
  
    useEffect(()=>{
      getWeather()
    },[])
  return (
    <div className='siteWrapper'>     
     <div className="siteTitle pageHeading">Varanasi</div>
    <section>
      <div className="siteDescription">
        <div className="all_info">
          <div className="img_info">
            <img src={varImg} alt="" />
          </div>
          <div className="text_info">
            <h2>About</h2>
            <p>
              Varanasi, also known as Banaras or Kashi, is one of the oldest
              continuously inhabited cities in the world, and it holds immense
              spiritual significance in India. Located in the northern state
              of Uttar Pradesh along the banks of the sacred Ganges River,
              Varanasi is considered the spiritual heart of India. It is often
              referred to as the City of Temples and the City of Light.
              Varanasi is renowned for its ancient ghats—steps leading down to
              the river—where pilgrims come to perform rituals, bathe in the
              Ganges, and seek spiritual purification. The ghats, such as
              Dashashwamedh Ghat and Manikarnika Ghat, are vibrant places
              where life and death coexist. Manikarnika Ghat, in particular,
              is one of the most prominent sites for Hindu cremations,
              symbolizing the belief that those who die in Varanasi attain
              liberation from the cycle of rebirth. The city&apos;s narrow
              alleys are filled with temples, ashrams, and bustling markets
              selling everything from silk sarees to sacred artifacts. The
              Kashi Vishwanath Temple, dedicated to Lord Shiva, is one of the
              most revered Hindu temples in the country and attracts devotees
              from all over the world. Varanasi&apos;s spiritual energy is
              palpable, with the constant chanting of mantras, the sound of
              temple bells, and the sight of saffron-clad sadhus (holy men).
            </p>
          </div>
        </div>
        <div className="history_info">
          <h2>History</h2>
          <p>
            Varanasi, or Benaras, (also known as Kashi) is one of the oldest
            living cities in the world. Varanasi`s Prominence in Hindu
            mythology is virtually unrevealed. Mark Twain, the English author
            and literature, who was enthralled by the legend and sanctity of
            Benaras, once wrote : “Benaras is older than history, older than
            tradition, older even than legend and looks twice as old as all of
            them put together”. The land of Varanasi (Kashi) has been the
            ultimate pilgrimage spot for Hindus for ages. Hindus believe that
            one who is graced to die on the land of Varanasi would attain
            salvation and freedom from the cycle of birth and re-birth. Abode
            of Lord Shiva and Parvati, the origins of Varanasi are yet
            unknown. Ganges in Varanasi is believed to have the power to wash
            away the sins of mortals. Hindus believe that one who is graced to
            die on the land of Varanasi would attain salvation and freedom
            from the cycle of birth and re-birth. The city is a center of
            learning and civilization for over 3000 years. Ganges is said to
            have its origins in the tresses of Lord Shiva and in Varanasi, it
            expands to the mighty river that we know of. With Sarnath, the
            place where Buddha preached his first sermon after enlightenment,
            just 10 km away, Varanasi has been a symbol of Hindu renaissance.
            Knowledge, philosophy, culture, devotion to Gods, Indian arts and
            crafts have all flourished here for centuries. Also a pilgrimage
            place for Jains, Varanasi is believed to be the birthplace of
            Parsvanath, the twenty-third Tirthankar. Vaishnavism and Shaivism
            have co-existed in Varanasi harmoniously. Varanasi has also been a
            great center of learning for ages. Varanasi is associated with
            promotion of spiritualism, mysticism, Sanskrit, yoga and Hindi
            language and honored authors such as the ever-famous novelist Prem
            Chand and Tulsi Das, the famous saint-poet who wrote Ram Charit
            Manas. Aptly called as the cultural capital of India, Varanasi has
            provided the right platform for all cultural activities to
            flourish. Many exponents of dance and music have come from
            Varanasi. Ravi Shankar, the internationally renowned Sitar maestro
            and Ustad Bismillah Khan, (the famous Shehnai player) are all sons
            of the blessed city or have lived here for major part of their
            lives. With a number of temples, Mrs. Annie Besant chose Varanasi
            as the home for her ‘Theosophical Society’ and Pandit Madan Mohan
            Malviya, to institute ‘Benares Hindu University, the biggest
            University in Asia. Ayurveda is said to be originated at Varanasi
            and is believed to be the basis of modern medical sciences such as
            Plastic surgery, Cataract and Calculus operations. Maharshi
            Patanjali, the preceptor of Ayurveda and Yoga, was also affiliated
            with Varanasi, the holy city. Varanasi is also famous for its
            trade and commerce, especially for the finest silks and gold and
            silver brocades, since the early days.
          </p>
        </div>
        <div className="heritage_info">
          <h2>Heritage & Culture</h2>
          <p>
            Varanasi, a living testament to India&apos;s rich heritage, boasts
            centuries of history and cultural significance. Its legacy is
            etched in the intricate architecture of ancient temples, sacred
            Ganges ghats, and preservation of traditional arts. Reflecting
            deep-rooted spirituality, architectural grandeur, and enduring
            traditions, Varanasi stands as a captivating cultural treasure
          </p>
          <div className="imageCards">
            <div className="imageCard">
              <img src="./Heritage Sites/heritage2.jpeg" alt="" />
            </div>
            <div className="imageCard">
              <img src="./Heritage Sites/heritage3.jpeg" alt="" />
            </div>
            <div className="imageCard">
              <img src="./Heritage Sites/heritage4.jpg" alt="" />
            </div>
            <div className="imageCard">
              <img src="./Heritage Sites/heritage5.jpeg" alt="" />
            </div>
            <div className="imageCard">
              <img src="./Heritage Sites/heritage5.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="heritage_info">
          <h2>Dance & Music</h2>
          <p>
            Varanasi, echoes with the enchanting rhythms of dance and music. A
            vibrant hub for Indian classical music, the city hosts a thriving
            community of musicians and music schools. The Ghats of Varanasi
            come alive with soul-stirring sitar, tabla, and vocal
            performances. Dance traditions, including Raslila and Kathak, add
            to the city&apos;s artistic heritage. Integral to Varanasi's
            cultural fabric, dance and music captivate with mesmerizing
            melodies, expressive movements, and the legacy of renowned artists
            who graced its stages.
          </p>
          <div className="imageCards">
            <div className="imageCard">
              <img src="./Heritage Sites/music1.jpeg" alt="" />
            </div>
            <div className="imageCard">
              <img src="./Heritage Sites/music2.jpeg" alt="" />
            </div>
            <div className="imageCard">
              <img src="./Heritage Sites/music3.jpeg" alt="" />
            </div>
            <div className="imageCard">
              <img src="./Heritage Sites/music4.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="heritage_info">
          <h2>Art & Craft</h2>
          <p>
            Varanasi is celebrated for its exquisite crafts and artistic
            traditions. Skilled artisans, honing their crafts over
            generations, create intricate works of art that showcase mastery
            and attention to detail. Silk weaving, metalwork, wood carving,
            stone carving, pottery, and handcrafted jewellery are treasured
            for beauty, quality, and skilled craftsmanship, forming an
            integral part of Varanasi&apos;s artistic legacy. Banarasi silk
            sarees are synonymous with opulence and elegance, dating back
            centuries with intricate patterns and motifs. Shimmering silk
            sarees adorned with zari (gold and silver threads) exemplify the
            skill and creativity of Varanasi&apos;s weavers.
          </p>
          <div className="imageCards">
            <div className="imageCard">
              <img src="./Heritage Sites/craft1.jpeg" alt="" />
            </div>
            <div className="imageCard">
              <img src="./Heritage Sites/craft2.jpeg" alt="" />
            </div>
            <div className="imageCard">
              <img src="./Heritage Sites/craft3.jpeg" alt="" />
            </div>
            <div className="imageCard">
              <img src="./Heritage Sites/craft4.jpeg" alt="" />
            </div>
          </div>
        </div>
        <div className="heritage_info">
          <h2>Places to Visit</h2>

          <div className="imageCards">
            <div className="imageCard">
              <img src="./Heritage Sites/place1.jpg" alt="" />
              <div className="place_name">Shri Kashi Vishwanath Temple</div>
            </div>
            <div className="imageCard">
              <img src="./Heritage Sites/place2.jpg" alt="" />
              <div className="place_name">Asi Ghat Varanasi</div>
            </div>
            <div className="imageCard">
              <img src="./Heritage Sites/place3.jpg" alt="" />
              <div className="place_name">Manikarnika Ghat</div>
            </div>
            <div className="imageCard">
              <img src="./Heritage Sites/place4.jpg" alt="" />
              <div className="place_name">Dashashwamedh Ghat</div>
            </div>
            <div className="imageCard">
              <img src="./Heritage Sites/place5.jpg" alt="" />
              <div className="place_name">Sankat Mochan Hanuman Temple</div>
            </div>
            <div className="imageCard">
              <img src="./Heritage Sites/place6.JPG" alt="" />
              <div className="place_name">Sarnath</div>
            </div>
          </div>
        </div>
      </div>
      <div className="siteBookings">
        <section className="smallSection">
          <div className="sideHeading">Location</div>
          <div className="mapWrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.24588714172!2d82.90870665270346!3d25.320739742159155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1729113299613!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        <section className="smallSection">
          <div className="sideHeading">Weather Forecast</div>
          <div className="weatherWrapper">
            {
              weather.weather && weather.main && weather.wind ? <>              
              <div>
              <span>Weather :</span>{weather.weather[0].main}
            </div>
            <div>
              <span>Temperature : </span> { (weather.main.temp - 273.15).toFixed(2) + '°C'}

            </div>
            <div>
              <span>Wind : </span> {weather.wind.speed} Km/h
            </div></> : 'Loading ...'
            }

          </div>
        </section>
        <section className="smallSection">
          <div className="sideHeading">Transportation</div>
          <div className="transDetails">
            <div>
              <span>Flight : </span>
              <button>Book Now</button>
            </div>
            <div>
              <span>Train : </span>
              <button>Book Now</button>
            </div>
            <div>
              <span>Bus : </span>
              <button>Book Now</button>
            </div>
          </div>
        </section>
        <section className="smallSection">
          <div className="sideHeading">Nearby Hotels</div>
          <div className="hotelDetails">
            <div>
              <span>Hotel Abhinav (&#8377;800) : </span>
              <button>Book Now</button>
            </div>
            <div>
              <span>Dormatels Hotel (&#8377;1200) : </span>
              <button>Book Now</button>
            </div>
            <div>
              <span>Mahadev Hotels (&#8377;1800) : </span>
              <button>Book Now</button>
            </div>
            <div>
              <span>Raj Hotels (&#8377;2500) : </span>
              <button>Book Now</button>
            </div>
          </div>
        </section>
        <section className="smallSection">
          <div className="sideHeading">Local Guide</div>
          <div className="hotelDetails">
            <div>
              <span>Shivam Singh (&#8377;300) : </span>
              <button>Book Now</button>
            </div>
            <div>
              <span>Mukesh Kumar (&#8377;400) : </span>
              <button>Book Now</button>
            </div>
            <div>
              <span>Divyanshu Raj (&#8377;500) : </span>
              <button>Book Now</button>
            </div>
          </div>
        </section>
        <section className="smallSection">
          <div className="sideHeading">Visitor Stats</div>
          <div className="visitorsDetails flex">
            <table>
              <tbody>
                <tr>
                  <td className="table_head">Local</td>
                  <td className="table_head">Foreigners</td>
                </tr>
                <tr>
                  <td>
                    <span className="small_head">Daily : </span> 150 - 200
                  </td>
                  <td>
                    <span className="small_head">Daily : </span> 80 - 120
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="small_head">Weekly : </span> 1,000 -
                    1,400
                  </td>
                  <td>
                    <span className="small_head">Weekly : </span> 500 - 1,000
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="small_head">Monthly : </span> 15,000 -
                    20,000
                  </td>
                  <td>
                    <span className="small_head">Monthly : </span> 4,000 -
                    5,000
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="small_head">Yearly : </span> 1,00,000 -
                    1,20,000
                  </td>
                  <td>
                    <span className="small_head">Yearly : </span> 15,000 -
                    20,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section></div>
  )
}

export default Varanasi