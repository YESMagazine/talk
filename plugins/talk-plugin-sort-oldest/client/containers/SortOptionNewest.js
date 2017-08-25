import {withSortOption} from 'plugin-api/beta/client/hocs';
import SortOption from '../components/SortOption';

export default withSortOption({by: 'CREATED_AT', order: 'DESC', label: 'Newest first'})(SortOption);
