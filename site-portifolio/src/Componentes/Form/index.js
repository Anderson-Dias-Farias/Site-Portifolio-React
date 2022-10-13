import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  DivForm,
  Section,
  Forms,
  ContactForm,
  H,
  Contact,
  Span,
  SpanT,
  Icons,
  ImputT,
  DivInp,
  Area,
  DivS,
  Button,
  Img,
  ErrorSpan,
} from "./styles";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import CNT from "./img/Contatact.png";

const schema = yup
  .object({
    Nome: yup.string().required("Nome é Obrigatorio!"),
    Email: yup
      .string()
      .email("Digite um email valido!")
      .required("Email é Obrigatorio!"),
    Telefone: yup.string().required("Telefone é Obrigatorio!"),
    Assunto: yup.string().required("Assunto é Obrigatorio!"),
    Mensagem: yup.string().required("Mensagem é Obrigatorio!"),
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    /* watch,*/
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (userData) => {}
  return (
    <Section>
      <H>Formulario de contato</H>
      <DivForm>
        <ContactForm>
          <Contact>
            <Img src={CNT} />
            <H>Contate-Nos</H>
            <SpanT>Nosso enderecço de correspondencia é:</SpanT>
            <SpanT>Rua das Hortencias, Nº: 777</SpanT>
            <Span>Gramado | RS</Span>
            <Span>(51) 95733357</Span>
            <Icons>
              <FaGithub size={40} />
              <FaInstagram size={40} />
              <FaWhatsapp size={40} />
            </Icons>
          </Contact>
        </ContactForm>

        <Forms onSubmit={handleSubmit(onSubmit)}>
          <DivInp>
            <ErrorSpan>{errors.Nome?.message}</ErrorSpan>
            <Span>Nome Completo</Span>
            <ImputT
              placeholder="Digite seu nome:"
              {...register("Nome", { required: true })}
            />
          </DivInp>
          <DivInp>
            <ErrorSpan>{errors.Email?.message}</ErrorSpan>
            <Span>Email</Span>
            <ImputT
              placeholder="Digite seu email:"
              {...register("Email", { required: true })}
            />
          </DivInp>
          <DivInp>
            <ErrorSpan>{errors.Telefone?.message}</ErrorSpan>
            <Span>Telefone</Span>
            <ImputT
              placeholder="Telefone:"
              {...register("Telefone", { required: true })}
            />
          </DivInp>
          <DivInp>
            <ErrorSpan>{errors.Assunto?.message}</ErrorSpan>
            <Span>Assunto</Span>
            <ImputT
              placeholder="Digite o assunto do email:"
              {...register("Assunto", { required: true })}
            />
          </DivInp>
          <DivInp>
            <ErrorSpan>{errors.Mensagem?.message}</ErrorSpan>
            <Area
              placeholder="Sua mensagem:"
              {...register("Mensagem", { required: true })}
            ></Area>
          </DivInp>
          <DivS>
            <Button type={"submit"} onClick={onSubmit} />
          </DivS>
        </Forms>
      </DivForm>
    </Section>
  );
};

export default Form;
