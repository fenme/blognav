import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: { dateString: string }) {    
  const date = parseISO(dateString)    
  return <time dateTime={dateString}>{format(date, 'yyyy 年 MM 月 dd 日')}</time>    
}
