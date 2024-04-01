import alldua from '../public/assets/navmenu/alldua.svg'
import home from '../public/assets/navmenu/home.svg'
import memorize from '../public/assets/navmenu/memorize.svg'
import bookmark from '../public/assets/navmenu/bookmark.svg'
import ruqyah from '../public/assets/navmenu/ruqyah.svg'
import duaInfo from '../public/assets/navmenu/dua-info.svg'
import books from '../public/assets/navmenu/books.svg'

export const menuList: { name: string; icon: string; link: string }[] = [
  { name: 'Home', icon: home, link: '/' },
  { name: 'All Duas', icon: alldua, link: '/' },
  { name: 'Memorize', icon: memorize, link: '/' },
  { name: 'Bookmark', icon: bookmark, link: '/' },
  { name: 'Ruqyah', icon: ruqyah, link: '/' },
  { name: 'Dua Info', icon: duaInfo, link: '/' },
  { name: 'Books', icon: books, link: '/' },
]
