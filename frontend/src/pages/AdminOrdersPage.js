import AdminOrders from '../features/admin/components/AdminOrders'
import Navbar from '../features/navbar/Navbar'

const AdminOrdersPage = () => {
  return (
    <div>
        <Navbar>
            <AdminOrders/>
        </Navbar>
    </div>
  )
}

export default AdminOrdersPage