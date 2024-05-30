
// let new__all = document.querySelector('.new__all'),
    arrayNewAll = [],
    btnSee = document.querySelector('.header__see'),
    blockEffect = document.querySelector('.blockEffect'),
    header__right = document.querySelectorAll('.header__right')
let headerAuthBtn = document.querySelector('.header__signIn')
let headerAuthBtnOut = document.querySelector('.header__signOut')
let accountName = document.querySelector('.accountName')
let header__menu = document.querySelectorAll('.header__menu li')
let movieEffect = document.querySelector('.movieEffect')
let movieSerEffect = document.querySelector('.movieSerEffect')
let movieCarEffect = document.querySelector('.movieCarEffect')
let new__all = document.querySelector('.swiper-wrapper')



header__menu.forEach((el) => {
    el.addEventListener('mouseenter', (elem) => {
        if (elem.target.textContent === 'Фильмы') {
            movieEffect.style.display = 'flex'
            setTimeout(()=>{
                movieEffect.classList.add('visible')
            },10)
            movieEffect.innerHTML = `
       
        <div id="Janr">
          <h3>Жанры</h3>
          <div id="janr_list">
            <ul>
              <li>Боевики</li>
              <li>Военные</li>
              <li>Детективы</li>
              <li>Дорамы</li>
              <li>Драмы</li>
              <li>Исторические</li>
              <li>Комедийные</li>
              <li>Криминальные</li>
              <li>Медицинские</li>
              <li>Мелодрамы</li>
              <li>Мистические</li>
            </ul>
            <ul>
              <li>Триллеры</li>
              <li>Турецкие</li>
              <li>Фантастические</li>
              <li>Фэнтези</li>
            </ul>
          </div>
        </div>
        <div id="group_list">
          <div id="country">
            <h3>Страны</h3>
            <ul>
              <li>Русские</li>
              <li>Зарубежные</li>
              <li>Корейские</li>
              <li>Турецкие</li>
            </ul>
          </div>
          <div id="year">
            <h3>Годы</h3>
            <ul>
              <li>Сериалы 2024года</li>
              <li>Сериалы 2023года</li>
              <li>Сериалы 2022года</li>
              <li>Сериалы 2021года</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="right">
        <div id="New_Series">
          <ul>
            <li class="active">Новинки</li>
            <li>Иви.Рейтинг</li>
            <li>Сериалы в HD</li>
            <li>Бесплатные сериалы</li>
          </ul>
        </div>
        <div id="image_block">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMDQWF54LDkEowHX5ChiIkUcwFUd3okQ-ER4evg98aQ&s"
            alt="Movie"
          />
        </div>
      </div>
    </div>
            `
            movieEffect.addEventListener('mouseenter',()=>{
                movieEffect.style.display = 'flex'
                setTimeout(()=>{
                    movieEffect.classList.add('visible')
                },0)
        
            })
            movieEffect.addEventListener('mouseleave',()=>{
                movieEffect.style.display = 'none'
        
                movieEffect.classList.remove('visible')
        
        
            })

            movieEffect.addEventListener('mouseleave',()=>{
                movieEffect.style.display = 'none'
        
                movieEffect.classList.remove('visible')
        
            
            })
        
    
        } else if (el.textContent === 'Сериалы') {
            movieSerEffect.style.display = 'flex'
            movieSerEffect.innerHTML = `
       
        <div id="Janr">
          <h3>Жанры</h3>
          <div id="janr_list">
            <ul>
              <li>Боевики</li>
              <li>Военные</li>
              <li>Детективы</li>
              <li>Дорамы</li>
              <li>Драмы</li>
              <li>Исторические</li>
              <li>Комедийные</li>
              <li>Криминальные</li>
              <li>Мелодрамы</li>
              <li>Мистические</li>
            </ul>
            <ul>
              <li>Триллеры</li>
              <li>Турецкие</li>
              <li>Фантастические</li>
              <li>Фэнтези</li>
            </ul>
          </div>
        </div>
        <div id="group_list">
          <div id="country">
            <h3>Страны</h3>
            <ul>
              <li>Русские</li>
              <li>Зарубежные</li>
              <li>Турецкие</li>
            </ul>
          </div>
          <div id="year">
            <h3>Годы</h3>
            <ul>
              <li>Сериалы 2024года</li>
              <li>Сериалы 2023года</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="right">
        <div id="New_Series">
          <ul>
            <li class="active">Новинки</li>
            <li>Иви.Рейтинг</li>
            <li>Сериалы в HD</li>
            <li>Бесплатные сериалы</li>
          </ul>
        </div>
        <div id="image_block">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMDQWF54LDkEowHX5ChiIkUcwFUd3okQ-ER4evg98aQ&s"
            alt="Movie"
          />
        </div>
      </div>
    </div>
            `
            movieSerEffect.addEventListener('mouseenter',()=>{
                movieSerEffect.style.display = 'flex'
                setTimeout(()=>{
                    movieSerEffect.classList.add('visible')
                },0)
        
            })
            movieSerEffect.addEventListener('mouseleave',()=>{
                movieSerEffect.style.display = 'none'
        
                movieSerEffect.classList.remove('visible')
        
            
            })
            
            el.addEventListener('mouseleave',(e)=>{
                movieSerEffect.style.display = 'none'
               if (e.clientY >200){
                   setTimeout(()=>{
                    movieCamovieSerEffectrEffect.classList.remove('visible')
                   },10)
               }
        
            })

        }  else if (el.textContent === 'Мультфильмы') {
            movieCarEffect.style.display = 'flex'
            movieCarEffect.innerHTML = `
       
        <div id="Janr">
          <h3>Жанры</h3>
          <div id="janr_list">
            <ul>
              <li>Драмы</li>
              <li>Исторические</li>
              <li>Комедийные</li>
              <li>Медицинские</li>
              <li>Мистические</li>
            </ul>
            <ul>
              <li>Триллеры</li>
              <li>Турецкие</li>
              <li>Фантастические</li>
              <li>Фэнтези</li>
            </ul>
          </div>
        </div>
        <div id="group_list">
          <div id="country">
            <h3>Страны</h3>
            <ul>
              <li>Русские</li>
              <li>Зарубежные</li>
              <li>Корейские</li>
              <li>Турецкие</li>
            </ul>
          </div>
          <div id="year">
            <h3>Годы</h3>
            <ul>
              <li>Сериалы 2024года</li>
              <li>Сериалы 2023года</li>
              <li>Сериалы 2022года</li>
              <li>Сериалы 2021года</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="right">
        <div id="New_Series">
          <ul>
            <li class="active">Новинки</li>
            <li>Иви.Рейтинг</li>
            <li>Сериалы в HD</li>
            <li>Бесплатные сериалы</li>
          </ul>
        </div>
        <div id="image_block">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMDQWF54LDkEowHX5ChiIkUcwFUd3okQ-ER4evg98aQ&s"
            alt="Movie"
          />
        </div>
      </div>
    </div>
            `
            movieCarEffect.addEventListener('mouseenter',()=>{
                movieCarEffect.style.display = 'flex'
                setTimeout(()=>{
                    movieCarEffect.classList.add('visible')
                },0)
        
            })
            movieCarEffect.addEventListener('mouseleave',()=>{
                movieCarEffect.style.display = 'none'
        
                movieCarEffect.classList.remove('visible')
            })
            el.addEventListener('mouseleave',(e)=>{
                movieCarEffect.style.display = 'none'
               if (e.clientY >200){
                   setTimeout(()=>{
                    movieCarEffect.classList.remove('visible')
                   },10)
               }
        
            })
        } 
    })
})



btnSee.addEventListener('mouseenter', () => {
    blockEffect.style.display = 'flex'
})

btnSee.addEventListener('mouseleave', () => {
    blockEffect.style.display = 'none'
})

blockEffect.addEventListener('mouseenter', () => {
    blockEffect.style.display = 'flex'
})

blockEffect.addEventListener('mouseleave', () => {
    blockEffect.style.display = 'none'
})

fetch('http://localhost:8080/films').then((res) => res.json()).then((data) => {
    data.forEach((el) => {
        // if(arrayNewAll.length >= 7) return
        // arrayNewAll.push(el)
        new__all.innerHTML += `
        <div class="swiper-slide">
            <div class="new__one" >
                <div class="new__back" style="background: url('${el.image}')center/cover no-repeat;">
                    <div class="new__back__effect">
                        <div class="newBackEffectNavigator">
                            <i class="fa-regular fa-bookmark"></i>
                            <i class="fa-solid fa-share"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fas fa-clone"></i>
                            <i class="fa-regular fa-eye"></i>
                        </div>
                        <div class="newBackEffectRating">
                            <h2>${el.rating}</h2>
                            <p class="newBackEffectRatingYear">${el.year}, ${el.country}, ${el.genre[0]}</p>
                            <p class="newBackEffectRatingTime">${el.time} Минуты</p>
                        </div>
                    </div>
                </div>
                <h4 class="new__one__title">${el.title}</h4>
                <p class="new__pod">Подписка</p>
            </div>   
        </div>
        `
    })
    
})

let a =  JSON.parse(localStorage.getItem('userData'))
if (a) {
    headerAuthBtn.style.display = 'none'
    headerAuthBtnOut.style.display = 'inline'
    accountName.style.display = 'inline'
    accountName.textContent = a.user.name

} 

headerAuthBtnOut.addEventListener('click', () => {
    localStorage.removeItem('userData')
    headerAuthBtnOut.style.display = 'none'
    headerAuthBtn.style.display = 'inline'
    accountName.style.display = 'none'
})
    
