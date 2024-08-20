import { EditEntity } from '../../../components/EditEntity';

const EditEntityPage = ({ params }) => {
    const { id } = params;
    return <EditEntity entityId={id} />;
};

export default EditEntityPage;
