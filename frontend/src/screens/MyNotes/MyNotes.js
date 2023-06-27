import MainScreen from "../../components/MainScreen"
import { Link } from "react-router-dom"
import {
    Button, Card
} from "react-bootstrap";
import notes from "../../data/notes"
const MyNotes = () => {
    const deleteHandler = (id) => {
        if (window.confirm("Are you sure ?")) {

        }
    }
    return (
        <MainScreen title='Welcome '>
            <Link to='createnote'>
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                    Create New Note
                </Button>
                {
                    notes.map(note => (
                        <Card style={{ margin: 10 }}>
                            <Card.Header style={{ display: 'flex' }}>
                                <span
                                    style={{
                                        color: "black",
                                        textDecoration: "none",
                                        flex: 1,
                                        cursor: "pointer",
                                        alignSelf: "center",
                                        fontSize: 18
                                    }}>{note.title}</span>
                                <div>
                                    <Button href={`/note/${note._id}`}>Edit</Button>
                                    <Button variant='danger' className='mx-2' onClick={() => deleteHandler(note._id)}>Delete</Button>
                                </div>
                            </Card.Header>
                        </Card>
                    ))
                }

            </Link>
        </MainScreen>
    )
}

export default MyNotes