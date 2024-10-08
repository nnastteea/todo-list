import React, { ReactNode } from "react";
import ErrorImg from "@assets/errorImage.jpg";

import * as S from "./style";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("ошибка отловлена", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <S.ContainerError>
          <S.TextError>
            Что-то пошло не так. Пожалуйста, попробуйте еще раз позже.
          </S.TextError>
          <S.ErrorIcon src={ErrorImg} />
        </S.ContainerError>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
