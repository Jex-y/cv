FROM pandoc/alpine:latest
RUN apk update && apk add weasyprint

ENTRYPOINT ["pandoc"]
