import { Link, useMatch } from "react-router-dom";

//возвращаю link но кастомный по этому мне надо его сконфегурировать 
  //он будет принимать пропсы
  //первый обязатеьный пропс children что бы я мог передавать в link дочерние элементы
  //второй пропс to который присутсвет в обычном link по этому его тоже неадо передать
  //...props что бы передать различные другие пропсв например стили
  //и все их я должен передать ниже в link если они вдруг будуь если не будет не страшно
  //для стилизации через classname или style мне надо понять customlink является активной сейчас или нет
  //для этого надо воспользоваться хуком usematch из коробки react-router-dom
  //создаю переменнцю match которая будет принимать результат работы хука usematch 
  //usematch возвращает true если URL переданная в качестве параметра активна на данный момент

const CustomLink = ({children, to, ...props}) => {
  const match = useMatch(to)
  console.log({match})

  return(
    <Link
     to={to} 
     style={{
      color: match ? 'tomato' : '',
     }}
     {...props} 
     >
        {children}
    </Link>
  )
}

export {CustomLink}