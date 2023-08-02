import { Dispatch, SetStateAction, useContext } from 'react';
import { Button, TextInput } from 'flowbite-react';
import { BookContext } from '../store/BookContext';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface IAddBook {
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const AddBookSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Demasiado Corto')
        .max(50, 'Demasiado largo')
        .required('Ingresa el título del libro'),
    authors: Yup.string()
        .min(2, 'Demasiado Corto')
        .max(50, 'Demasiado largo')
        .required('Ingresa el o los autores'),
    genere: Yup.string()
        .min(2, 'Demasiado Corto')
        .max(50, 'Demasiado largo')
        .required('Ingresa el género del libro'),
    released: Yup.string()
        .required('Ingresa la fecha de lanzamiento'),
})

const AddBook = ({ setIsOpen }:IAddBook) => {
    
    const { addBook } = useContext(BookContext)

    return (
    <Formik
       initialValues={{ name: '', authors: '', genere: '', released: '' }}
       validationSchema={AddBookSchema}
       onSubmit={(values, { setSubmitting }) => {
            addBook(values)
            setSubmitting(false)
            setIsOpen(false)
       }}
        >
       {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
       }) => (
         <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

            <TextInput
                id='name'
                name='name'
                placeholder='Título'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                type='text'
            />
           {errors.name && touched.name && errors.name}

           <TextInput
                id='authors'
                name='authors'
                placeholder='Autor'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.authors}
                type='text'
            />
           {errors.authors && touched.authors && errors.authors}

           <TextInput
                id='genere'
                name='genere'
                placeholder='Género'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.genere}
                type='text'
            />
           {errors.genere && touched.genere && errors.genere}

           <TextInput
                id='released'
                name='released'
                placeholder='Fecha'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.released}
                type='date'
            />
           {errors.released && touched.released && errors.released}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
            <div className='flex gap-4'>
                <Button type='submit' disabled={isSubmitting} >
                    Agregar
                </Button>
                <Button color='blue' onClick={() => setIsOpen(false)}>
                    Cancelar
                </Button>
            </div>
         </form>
       )}
    </Formik>
  )
}

export default AddBook