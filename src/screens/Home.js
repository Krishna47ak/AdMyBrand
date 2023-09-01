import { useState } from 'react'
import { Select, Option } from "@material-tailwind/react";
import { connect } from 'react-redux';
import Map from '../components/Map';

const Home = ({ users }) => {
    const [selectUser, setSelectUser] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [position, setPosition] = useState()

    const onUserChange = (e) => {
        setSelectUser(e)
        const select = users?.find((user) => user?.id === e)
        setPosition([select?.address?.geo?.lat, select?.address?.geo?.lng])
    }

    const onSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className=' bg-[#eef1f3] flex flex-col justify-center items-center p-5 xl:py-12 min-h-screen' >
            <Map position={position} city={users?.find((user) => user?.id === selectUser)?.address?.city} />
            <form className="mt-10" onSubmit={onSubmit} >
                <div className="flex w-72 md:w-80 xl:w-96 flex-col gap-6 mb-3 z-10">
                    <Select className='bg-white' size="md" label="Select User" onChange={e => onUserChange(parseInt(e))} >
                        {users?.map((user) => {
                            return (
                                <Option key={user?.id} value={user?.id.toString()} className='' >{user?.name}</Option>
                            )
                        })}
                    </Select>
                </div>
                <div className="mb-3">
                    <input value={title} onChange={e => setTitle(e.target.value)}
                        type="text"
                        placeholder="Title"
                        name="title"
                        className='w-full h-9 rounded-md pl-4 border border-[#B0BEC5]'
                        required
                    />
                </div>
                <div className="mb-5">
                    <input value={body} onChange={e => setBody(e.target.value)}
                        type="text"
                        placeholder="Body"
                        name="body"
                        className='w-full h-9 rounded-md pl-4 border border-[#B0BEC5]'
                        required
                    />
                </div>
                <div className='flex justify-center' >
                    <button className='bg-blue-500 font-semibold w-full h-10 rounded-sm' type='submit' >Submit</button>
                </div>
            </form>

        </div>
    )
}

const mapStateToProps = state => ({
    users: state.user.users
})

export default connect(mapStateToProps)(Home)