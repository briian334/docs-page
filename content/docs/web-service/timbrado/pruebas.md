---
weight: 520
title: "Pruebas"
description: "Implementación del Web Service para Pruebas"
icon: "terminal"
date: "2024-06-10T16:12:05-06:00"
lastmod: "2024-06-10T16:12:05-06:00"
draft: false
---

## URL

Para realizar una prueba se debe realizar una petición de tipo `POST` a la siguiente [URL](https://test.paxfacturacion.com.mx:453/webservices/wcfRecepcionASMX.asmx):

```url
https://test.paxfacturacion.com.mx:453/webservices/wcfRecepcionASMX.asmx
```

## Petición

El método disponible para el consumo del servicio es [fnEnviarXML](https://test.paxfacturacion.com.mx:453/webservices/wcfRecepcionASMX.asmx)

La estructura de la petición es la siguiente:

{{% alert icon=" " context="success" %}}
**`POST`** **https://test.paxfacturacion.com.mx:453/webservices/wcfRecepcionASMX.asmx**
{{% /alert %}}

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <fnEnviarXML xmlns="https://test.paxfacturacion.com.mx:453">
            <psComprobante>string</psComprobante>
            <psTipoDocumento>string</psTipoDocumento>
            <pnId_Estructura>int</pnId_Estructura>
            <sNombre>string</sNombre>
            <sContraseña>string</sContraseña>
            <sVersion>string</sVersion>
        </fnEnviarXML>
    </soap:Body>
</soap:Envelope>
```

### Parámetros

{{< table  "table-striped" >}}
| Parámetro | Descripción | Ejemplo |
|-----------|-------------|---------|
| `psComprobante` | Documento XML (en formato de cadena, una sola línea sin encabezado) | |
| `psTipoDocumento` | Tipo de documento (Usar clave numérica) | 01, 02, 03, 04, 05, 06, 07, 08, 09, 10 |
| `pnId_Estructura` | Identificador de la estructura | 0 |
| `sNombre` | Nombre de usuario | "nombre_usuario" |
| `sContraseña` | Contraseña (proporcionada por PAX) | "password64" |
| `sVersion` | Versión | “3.3” |
{{< /table >}}

#### Clave numérica para cada tipo de documento

{{< table  "table-striped table-borderless" >}}
| Clave Numérica | Tipo de Documento |
|----------------|-------------------|
| `01` | Factura |
| `02` | Nota de Crédito |
| `03` | Nota de Cargo |
| `04` | Recibo de Arrendamiento |
| `05` | Carta Porte |
| `06` | Recibo de Honorarios |
| `07` | Comprobante de Pago |
| `08` | Recibo de Donativos |
| `09` | Recibo de Pago |
| `10` | Recibo de Nómina |
{{< /table >}}

{{% alert context="info" %}}
El siguiente ejemplo muestra cómo enviar la **petición**, y como contesta el **servicio**.
{{% /alert %}}

### Envio de petición

El cuerpo de la `petición` es el siguiente:

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:test="https://test.paxfacturacion.com.mx:453">
    <soapenv:Header />
    <soapenv:Body>
        <test:fnEnviarXML>
            <test:psComprobante>&lt;cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/3"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="http://www.sat.gob.mx/cfd/3
                http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd" Version="3.3" Serie="T"
                Folio="01" Fecha="2017-08-02T18:15:34"
                Sello="NzJsqwcwLUg1ofDwshHF8w4wMGTfAtkfrK3BEW8CryrMdRy3D+K715TL3axeQTq04rHDZCLR5ysam1bUnN8LFk6kDTsudVpzyS+4ASrS+l7cHyRhPn7dzEdob7wQ4El7lRo8k7y17jr731AZAQ97D8QnmY3QvDW1DbBVHeOKd/zsY7f4uox0bPwhI1SDr/61Hi86ckF3ldZ1tbwRAXhP5DOSHMAQib5C4KeVjf2e/NFwcXW50lVFUoBlvYG4TDiL5ij5Ikpd0l5IOv04zmBY0Yc00HhgJLHHvTfMG9RxVF919pKnfK4lcwCSi+J+X82pKAIW34WNEHDBoNHl7aoTFw=="
                FormaPago="01" NoCertificado="20001000000300022755"
                Certificado="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"
                CondicionesDePago="Pago en una sola exhibicion" SubTotal="1500.00"
                Descuento="350.00" Moneda="MXN" TipoCambio="1" Total="1390.00" TipoDeComprobante="I"
                MetodoPago="PUE" LugarExpedicion="51865"&gt; &lt;cfdi:CfdiRelacionados
                TipoRelacion="01"&gt; &lt;cfdi:CfdiRelacionado
                UUID="2898347e-1124-4c70-b9e0-07a91ca2aabf" /&gt; &lt;/cfdi:CfdiRelacionados&gt;
                &lt;cfdi:Emisor Rfc="MAG041126GT8" Nombre="RFC .... Emisor" RegimenFiscal="601"
                /&gt; &lt;cfdi:Receptor Rfc="XAXX010101000" Nombre="RFC Receptor" UsoCFDI="G01"
                /&gt; &lt;cfdi:Conceptos&gt; &lt;cfdi:Concepto ClaveProdServ="01010101"
                NoIdentificacion="NID14541" Cantidad="1" ClaveUnidad="C81" Unidad="Pieza"
                Descripcion="Tablero de Arcade" ValorUnitario="1500.00" Importe="1500.00"
                Descuento="350.00"&gt; &lt;cfdi:Impuestos&gt; &lt;cfdi:Traslados&gt;
                &lt;cfdi:Traslado Base="3000" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000"
                Importe="480" /&gt; &lt;/cfdi:Traslados&gt; &lt;cfdi:Retenciones&gt;
                &lt;cfdi:Retencion Base="1500" Impuesto="002" TipoFactor="Tasa"
                TasaOCuota="0.000000" Importe="0.00" /&gt; &lt;cfdi:Retencion Base="1500"
                Impuesto="001" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="240.00" /&gt;
                &lt;/cfdi:Retenciones&gt; &lt;/cfdi:Impuestos&gt; &lt;cfdi:Parte
                ClaveProdServ="10101500" NoIdentificacion="N0514515" Cantidad="1" Unidad="Pieza"
                Descripcion="Parte Identificada" ValorUnitario="15.55" Importe="15.55" /&gt;
                &lt;/cfdi:Concepto&gt; &lt;/cfdi:Conceptos&gt; &lt;cfdi:Impuestos
                TotalImpuestosRetenidos="240.00" TotalImpuestosTrasladados="480.00"&gt;
                &lt;cfdi:Retenciones&gt; &lt;cfdi:Retencion Impuesto="002" Importe="0.00" /&gt;
                &lt;cfdi:Retencion Impuesto="001" Importe="240.00" /&gt; &lt;/cfdi:Retenciones&gt;
                &lt;cfdi:Traslados&gt; &lt;cfdi:Traslado Impuesto="003" TipoFactor="Tasa"
                TasaOCuota="0.000000" Importe="0.00" /&gt; &lt;cfdi:Traslado Impuesto="002"
                TipoFactor="Tasa" TasaOCuota="0.160000" Importe="480.00" /&gt;
                &lt;/cfdi:Traslados&gt; &lt;/cfdi:Impuestos&gt; &lt;/cfdi:Comprobante&gt;</test:psComprobante>
            <test:psTipoDocumento>01</test:psTipoDocumento>
            <test:pnId_Estructura>0</test:pnId_Estructura>
            <test:sNombre>wsdl_pax</test:sNombre>
            <test:sContraseña>wqrCssOUw4HDgMSUxJTDq8OkwrQXMnBpSS4Ocm/Cve+/te+9tu++me+/tiEc776v776B</test:sContraseña>
            <test:sVersion>3.3</test:sVersion>
        </test:fnEnviarXML>
    </soapenv:Body>
</soapenv:Envelope>
```

### Respuesta

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <fnEnviarXMLResponse xmlns="https://test.paxfacturacion.com.mx:453">
            <fnEnviarXMLResult><![CDATA[<cfdi:Comprobante xsi:schemaLocation="http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd" Version="3.3" Serie="T" Folio="01" Fecha="2017-08-02T18:15:34" Sello="NzJsqwcwLUg1ofDwshHF8w4wMGTfAtkfrK3BEW8CryrMdRy3D+K715TL3axeQTq04rHDZCLR5ysam1bUnN8LFk6kDTsudVpzyS+4ASrS+l7cHyRhPn7dzEdob7wQ4El7lRo8k7y17jr731AZAQ97D8QnmY3QvDW1DbBVHeOKd/zsY7f4uox0bPwhI1SDr/61Hi86ckF3ldZ1tbwRAXhP5DOSHMAQib5C4KeVjf2e/NFwcXW50lVFUoBlvYG4TDiL5ij5Ikpd0l5IOv04zmBY0Yc00HhgJLHHvTfMG9RxVF919pKnfK4lcwCSi+J+X82pKAIW34WNEHDBoNHl7aoTFw==" FormaPago="01" NoCertificado="20001000000300022755" Certificado="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" CondicionesDePago="Pago en una sola exhibicion" SubTotal="1500.00" Descuento="350.00" Moneda="MXN" TipoCambio="1" Total="1390.00" TipoDeComprobante="I" MetodoPago="PUE" LugarExpedicion="51865" xmlns:cfdi="http://www.sat.gob.mx/cfd/3" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><cfdi:CfdiRelacionados TipoRelacion="01"><cfdi:CfdiRelacionado UUID="2898347e-1124-4c70-b9e0-07a91ca2aabf" /></cfdi:CfdiRelacionados><cfdi:Emisor Rfc="MAG041126GT8" Nombre="RFC .... Emisor" RegimenFiscal="601" /><cfdi:Receptor Rfc="XAXX010101000" Nombre="RFC Receptor" UsoCFDI="G01" /><cfdi:Conceptos><cfdi:Concepto ClaveProdServ="01010101" NoIdentificacion="NID14541" Cantidad="1" ClaveUnidad="C81" Unidad="Pieza" Descripcion="Tablero de Arcade" ValorUnitario="1500.00" Importe="1500.00" Descuento="350.00"><cfdi:Impuestos><cfdi:Traslados><cfdi:Traslado Base="3000" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="480" /></cfdi:Traslados><cfdi:Retenciones><cfdi:Retencion Base="1500" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.000000" Importe="0.00" /><cfdi:Retencion Base="1500" Impuesto="001" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="240.00" /></cfdi:Retenciones></cfdi:Impuestos><cfdi:Parte ClaveProdServ="10101500" NoIdentificacion="N0514515" Cantidad="1" Unidad="Pieza" Descripcion="Parte Identificada" ValorUnitario="15.55" Importe="15.55" /></cfdi:Concepto></cfdi:Conceptos><cfdi:Impuestos TotalImpuestosRetenidos="240.00" TotalImpuestosTrasladados="480.00"><cfdi:Retenciones><cfdi:Retencion Impuesto="002" Importe="0.00" /><cfdi:Retencion Impuesto="001" Importe="240.00" /></cfdi:Retenciones><cfdi:Traslados><cfdi:Traslado Impuesto="003" TipoFactor="Tasa" TasaOCuota="0.000000" Importe="0.00" /><cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="480.00" /></cfdi:Traslados></cfdi:Impuestos><cfdi:Complemento><tfd:TimbreFiscalDigital Version="1.1" UUID="47917b57-c71b-4700-a167-5af4679194cf" FechaTimbrado="2017-08-03T18:45:45" RfcProvCertif="DAL050601L35" Leyenda="Leyenda del SAT" SelloCFD="NzJsqwcwLUg1ofDwshHF8w4wMGTfAtkfrK3BEW8CryrMdRy3D+K715TL3axeQTq04rHDZCLR5ysam1bUnN8LFk6kDTsudVpzyS+4ASrS+l7cHyRhPn7dzEdob7wQ4El7lRo8k7y17jr731AZAQ97D8QnmY3QvDW1DbBVHeOKd/zsY7f4uox0bPwhI1SDr/61Hi86ckF3ldZ1tbwRAXhP5DOSHMAQib5C4KeVjf2e/NFwcXW50lVFUoBlvYG4TDiL5ij5Ikpd0l5IOv04zmBY0Yc00HhgJLHHvTfMG9RxVF919pKnfK4lcwCSi+J+X82pKAIW34WNEHDBoNHl7aoTFw==" SelloSAT="Hj4tF3vyPU9ShiCUK9P3uiWnQE68Ijd3VNva31N3uYBsjRcP8uooJzOdkA0YxS7jYKWLIrRWj58zmChwbVNXgKLNaGFJHzhawpNZuuzPhmQ2NR7SnksiIuytp7X4wrVsG//1AMV8eKYUX8Dhi5TbBsI1BExWQFBEiBpYsI7GKdqShdLY6qj/ouNgAI0QJ1M9lpo1NNleKvSYR92XfsOZI2K0kNPYVqwfQlXvmjoFHtuX+A+4n3dsPCGnWKE+wueFGJw6usD9Jf0PPTis4oEqFSnm4uiVLHAwAwbzm6PZRBAwT1OY/k9WSa/CzFN/ubCpy+EDSM0GPJyqr+y+UBYDsQ==" NoCertificadoSAT="20001000000300022323" xsi:schemaLocation="http://www.sat.gob.mx/TimbreFiscalDigital http://www.sat.gob.mx/sitio_internet/cfd/timbrefiscaldigital/TimbreFiscalDigitalv11.xsd" xmlns:tfd="http://www.sat.gob.mx/TimbreFiscalDigital" /></cfdi:Complemento></cfdi:Comprobante>]]></fnEnviarXMLResult>
        </fnEnviarXMLResponse>
    </soap:Body>
</soap:Envelope>
```

## Consumir servicio

{{< tabs tabTotal="3">}}
{{% tab tabName=".NET C#" %}}

<!-- .NET C# Content -->

```csharp
wcfRecepcion servicioXML = new wcfRecepcion();

string resultado = servicioXML.fnEnviarXML(documentoXML, "01", 0,"usuario", "password64", sversion);
```

{{% /tab %}}
{{% tab tabName="Node JS" %}}

<!-- NODE JS Content -->
```js
const axios = require('axios');

async function enviarXML() {
  const documentoXML = 'tu XML aquí';
  const tipoDocumento = 'factura';
  const idEstructura = 0;
  const nombreUsuario = 'nombre_usuario';
  const contraseña = 'password64';
  const version = '3.2';

  const response = await axios.post('URL del servicio aquí', {
    psComprobante: documentoXML,
    psTipoDocumento: tipoDocumento,
    pnId_Estructura: idEstructura,
    sNombre: nombreUsuario,
    sContraseña: contraseña,
    sVersion: version
  });

  console.log(response.data);
}

enviarXML();
```

{{% /tab %}}
{{% tab tabName="Laravel PHP" %}}

<!-- Laravel PHP Content -->
```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'URL del servicio aquí', [
    'form_params' => [
        'psComprobante' => 'tu XML aquí',
        'psTipoDocumento' => 'factura',
        'pnId_Estructura' => 0,
        'sNombre' => 'nombre_usuario',
        'sContraseña' => 'password64',
        'sVersion' => '3.2'
    ]
]);

echo $response->getBody();
```

{{% /tab %}}
{{< /tabs >}}

#### Ejemplo de Respuesta de error

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <fnEnviarXMLResponse xmlns="https://test.paxfacturacion.com.mx:453">
            <fnEnviarXMLResult>CFDI33193 - CFDI33193|El valor seleccionado debe corresponder a un
                valor del catalogo donde la columna impuesto corresponda con el campo impuesto y la
                columna factor corresponda con el campo TipoFactor.;
                302|Sello mal formado o inválido;
                CFD33102|El resultado de la digestión debe ser igual al resultado de la
                desencripción del sello.;</fnEnviarXMLResult>
        </fnEnviarXMLResponse>
    </soap:Body>
</soap:Envelope>
```

{{% alert context="info" %}}
El servicio regresa un **código alfanumérico** al principio del resultado de la petición separado por el carácter **`“-”`** seguido de la descripción de cada uno de los errores encontrados en el **XML**.
{{% /alert %}}

### Usuario y contraseña

El usuario y contraseña para pruebas son los siguientes:  
‎   
**Usuario:**  
`WSDL_PAX`  
‎  
**Contraseña:**  
`wqrCssOUw4HDgMSUxJTDq8OkwrQXMnBpSS4Ocm/Cve+/te+9tu++me+/tiEc776v776B`  

‎  
{{% alert icon="⚠️" context="warning" %}}
El tamaño **máximo** del comprobante es **`100kb`**.  
‎  
Favor de utilizar los certificados de pruebas que se adjuntan en el correo con RFC **`MAG041126GT8`**.
{{% /alert %}}

‎  

## Códigos de error

A la hora de utilizar nuestro servicio es posible que te encuentres con ciertos errores. La siguiente lista tiene como objetivo ayudarte a comprender qué significa cada código de error y a solucionar problemas de manera más eficiente.

{{< table  "table-borderless" >}}
| Código | Descripción |
|---------|--------|
| `301` | Revise la codificación del documento que sea UTF-8. |
| `302` | Sello mal formado o inválido. |
| `303` | Sello no corresponde a emisor o caduco. |
| `304` | Certificado revocado o caduco. |
| `305` | La fecha de emisión no está dentro de la vigencia del CSD del Emisor. |
| `306` | El certificado no es de tipo CSD. |
| `307` | El CFDI contiene un timbre previo. |
| `308` | Certificado no expedido por el SAT. |
| `333` | El XML no cumple con el esquema de Hacienda. |
| `401` | Que el rango de la fecha de generación no sea mayor a 72 horas para la emisión del timbre. |
| `402` | Que exista el RFC del emisor conforme al régimen autorizado (Lista de validación de régimen) LCO. |
| `403` | Que la fecha de emisión sea posterior al 01 de Enero 2011. |
| `404` | La fecha de emisión es posterior a la fecha de timbrado. |
| `406` | El nombre de documento no corresponde a ninguno del sistema. |
| `509` | Verifique el RFC del receptor. |
| `510` | No está permitido enviar adendas en el comprobante. |
| `570` | No se pudo recuperar el certificado del comprobante. |
| `622` | El servicio no está disponible. |
| `817` | No se pudo generar el sello del PAC. |
| `999` | Error durante el registro del comprobante. |
| `96` | Usuario o contraseña incorrecta. |
| `97` | No hay créditos disponibles. |
<!-- | `90` | Los datos del usuario son requeridos. |
| `91` | El usuario está en estado **pendiente**. |
| `92` | El usuario está en estado **bloqueado**. |
| `93` | El usuario está en estado **expirado**. |
| `94` | El usuario está en estado **por cambiar contraseña**. |
| `95` | Usuario inexistente. | -->
{{< /table >}}
‎  

## Información adicional
1. [Información adicional sobre validaciones adicionales a realizar por PAX Facturación consultar el archivo Matriz de Errores para la versión CFDI 3.3](http://www.sat.gob.mx/informacion_fiscal/factura_electronica/Paginas/Anexo_20_version3.3.aspx)
   
2. [Información adicional sobre validaciones adicionales a realizar por PAX Facturación consultar el archivo Matriz de Errores para el complemento de Pagos 1.0](http://www.sat.gob.mx/informacion_fiscal/factura_electronica/Paginas/Recepcion_de_pagos.aspx)
   
3. [Información adicional sobre validaciones adicionales a realizar por PAX Facturación consultar el archivo Matriz de Errores para el complemento de Comercio Exterior 1.1](http://www.sat.gob.mx/informacion_fiscal/factura_electronica/Paginas/complemento_comercio_exterior.aspx)
   
4. [Información adicional sobre validaciones adicionales a realizar por PAX Facturación consultar el archivo Matriz de Errores para el complemento de INE 1.1](http://www.sat.gob.mx/informacion_fiscal/factura_electronica/Paginas/Complemento_INE.aspx)
   
5. [Información adicional sobre validaciones adicionales a realizar por PAX Facturación consultar el archivo Matriz de Errores para el complemento de Nomina 1.2](http://www.sat.gob.mx/informacion_fiscal/factura_electronica/Paginas/complemento_nomina.aspx)

6. [Información adicional sobre validaciones adicionales a realizar por PAX Facturación consultar el archivo Matriz de Errores para el complemento de Estado de Cuenta Combustibles 1.1](http://www.sat.gob.mx/informacion_fiscal/factura_electronica/Paginas/EstadoDeCuentaCombustible.aspx)
