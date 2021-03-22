import React, { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { useParams } from 'react-router-dom';
import api from '../../../services/api';
import history from '../../../services/history';

import Input from '../../../components/SimpleInput';
import FileInput from '../../../components/FileInput';
import InputMask from '../../../components/InputMask';
import TextAreaInput from '../../../components/TextAreaInput';

import { StyledForm } from '../../../styles/form';
import { Container, LineGroup } from './styles';

function BookForm() {
  const formRef = useRef(null);

  const { id } = useParams();

  const [bookData, setBookData] = useState({});

  useEffect(() => {
    async function getBook() {
      const response = await api.get(`/books/${id}`);

      setBookData(response.data);
    }

    if (id) {
      getBook();
    }
  }, [id]);

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        genre: Yup.string().required('Genre is required'),
        isbn: Yup.string().required('ISBN is required'),
        publishing_company: Yup.string().required(
          'Publishing Company is required'
        ),
        pages: Yup.string().required('Pages is required'),
        authors: Yup.string().required('Authors is required'),
        synopsis: Yup.string(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const submitData = {
        ...data,
        cover_id: Number(data.cover_id) || bookData.cover.id,
        authors: data.authors.split(','),
      };

      // Validation passed
      if (id) {
        await api.put(`/books/${id}`, submitData);
      } else {
        await api.post('/books', submitData);
      }

      toast.success('Book registered with success!');
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }

      toast.error('Operation error, please check your data');
    }
  }

  return (
    <Container>
      <StyledForm ref={formRef} onSubmit={handleSubmit} initialData={bookData}>
        <FileInput name="cover_id" fieldName="cover" />

        <section>
          <Input name="title" label="Title" type="text" placeholder="" />
          <LineGroup template="4fr 1fr">
            <Input
              name="publishing_company"
              label="Publishing Company"
              type="text"
              placeholder=""
            />

            <InputMask
              name="isbn"
              label="ISBN"
              mask="999-9999999999"
              maskPlaceholder={null}
              placeholder="__-__________"
            />
          </LineGroup>

          <LineGroup template="6fr 1fr">
            <Input name="genre" label="Genre" type="text" placeholder="" />
            <Input name="pages" label="Pages" type="text" placeholder="" />
          </LineGroup>
          <Input name="authors" label="Authors" type="text" placeholder="" />

          <TextAreaInput name="synopsis" label="Synopsis" placeholder="" />

          <LineGroup template="1fr 1fr">
            <button type="submit">Confirm</button>
            <button
              type="button"
              className="cancel"
              onClick={() => history.goBack()}
            >
              Cancel
            </button>
          </LineGroup>
          {id && (
            <button type="button" className="delete" onClick={() => {}}>
              Delete book
            </button>
          )}
        </section>
      </StyledForm>
    </Container>
  );
}

export default BookForm;
