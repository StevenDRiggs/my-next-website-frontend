import EntryDisplay from '../components/entry_display'
import EntryModal from '../components/entry_modal'


const Blog = () => {
  return (
    <div>
      <EntryDisplay />
      <EntryModal entryType='signup' />
    </div>
  )
}


export default Blog
