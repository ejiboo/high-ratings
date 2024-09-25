import ContentList from './components/ContentList'
import Sidebar from './components/Sidebar'

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="lg:w-3/4">
        <ContentList />
      </div>
      <div className="lg:w-1/4">
        <Sidebar />
      </div>
    </div>
  )
}
