import {useDispatch, useSelector} from 'react-redux';
import {
    setPage,
    tagRemoved,
    tagSelected,
} from '../../features/filter/filterSlice';

export default function Tag({id, title}) {
    const dispatch = useDispatch();
    const {tags: selectedTags} = useSelector((state) => state.filter);

    const isSelected = selectedTags == id ? true : false;

    const style = isSelected
        ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer'
        : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer';

    const handleSelect = () => {
        if (isSelected) {
            dispatch(setPage(1));
            dispatch(tagRemoved());
        } else {
            dispatch(setPage(1));
            dispatch(tagSelected(id));
        }
    };

    return (
        <div className={style} onClick={handleSelect}>
            {title}
        </div>
    );
}
