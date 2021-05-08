import { SalePage } from 'types/Sale'

interface Props {
    page: SalePage
    onPageChange: Function
}

const Pagination = ({ page, onPageChange }: Props) => {
    return (
        <div className='row w-100 justify-content-center'>
            <nav>
                <ul className='pagination'>
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button
                            type='button'
                            className='page-link'
                            onClick={() => onPageChange(page.number - 1)}
                        >
                            Anterior
                        </button>
                    </li>
                    <li className='page-item disabled'>
                        <span className='page-link'>{page.number + 1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button
                            type='button'
                            className='page-link'
                            onClick={() => onPageChange(page.number + 1)}
                        >
                            Próxima
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
