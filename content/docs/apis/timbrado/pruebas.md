---
weight: 420
title: "Pruebas"
description: "Implementación de API para Pruebas."
icon: "terminal"
date: "2024-06-10T11:54:45-06:00"
lastmod: "2024-06-10T11:54:45-06:00"
draft: false
toc: true
---

## URL

Para realizar una prueba se debe realizar una petición de tipo `POST` a la siguiente [URL](https://test.paxfacturacion.com.mx:490/api/cfdi/timbrar40):

```url
https://test.paxfacturacion.com.mx:490/api/cfdi/timbrar40
```

## Petición

La estructura de la petición para enviar el timbrado es el XML previamente sellado. El siguiente ejemplo muestra la manera correcta de como realizarlo.

{{% alert context="success" %}}
**`POST`** **https://test.paxfacturacion.com.mx:490/api/cfdi/timbrar40**
{{% /alert %}}

### Cuerpo de petición

```xml
<cfdi:Comprobante
    Certificado="MIIFfzCCA2egAwIBAgIUMzAwMDEwMDAwMDA1MDAwMDMzMTYwDQYJKoZIhvcNAQELBQAwggErMQ8wDQYDVQQDDAZBQyBVQVQxLjAsBgNVBAoMJVNFUlZJQ0lPIERFIEFETUlOSVNUUkFDSU9OIFRSSUJVVEFSSUExGjAYBgNVBAsMEVNBVC1JRVMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlvc2Nhci5tYXJ0aW5lekBzYXQuZ29iLm14MR0wGwYDVQQJDBQzcmEgY2VycmFkYSBkZSBjYWxpejEOMAwGA1UEEQwFMDYzNzAxCzAJBgNVBAYTAk1YMRkwFwYDVQQIDBBDSVVEQUQgREUgTUVYSUNPMREwDwYDVQQHDAhDT1lPQUNBTjERMA8GA1UELRMIMi41LjQuNDUxJTAjBgkqhkiG9w0BCQITFnJlc3BvbnNhYmxlOiBBQ0RNQS1TQVQwHhcNMjMwNTA5MjEzNzM2WhcNMjcwNTA5MjEzNzM2WjCBpjEdMBsGA1UEAxMUWE9DSElMVCBDQVNBUyBDSEFWRVoxHTAbBgNVBCkTFFhPQ0hJTFQgQ0FTQVMgQ0hBVkVaMR0wGwYDVQQKExRYT0NISUxUIENBU0FTIENIQVZFWjEWMBQGA1UELRMNQ0FDWDc2MDUxMDFQODEbMBkGA1UEBRMSQ0FDWDc2MDUxME1HVFNIQzA0MRIwEAYDVQQLEwlTdWNpcnNhIDEwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCWEIhEVVC/mNpXWaUFpN0+QuHRsJcFc4C3qJQaHdmzlmWBB8DnCJrYB+fbLQu/QHo+W/JctMANXN9xljxX5nPK7GHDWm6kN/U4UtOi49kSt1Au2rnfTInpuvwvBVflW+tBI4y472TPO9wCD0+aS6T8RN6KFfw/NlUJDCEeICSohNIxbzCYg4OOf/pnSComvC1T7lyyJeGGwXwv8v43Wk5RQGiBnOuN9ZtKoyPLO7QFb+aGmZ0aAhSCMaCEiIlMinedSqBH2og780dH7Zsd5f3mNS0AbJ9xfr2DNkBj7qz7DcgnJT2KsSmtP1IkXUB+OkivXo1nzyr1VKpDloIWBPa7AgMBAAGjHTAbMAwGA1UdEwEB/wQCMAAwCwYDVR0PBAQDAgbAMA0GCSqGSIb3DQEBCwUAA4ICAQChJcU8iKvcRAOx0xoNilj5z2rby1DeGF39bVk0tuWlMgdmxnWznMPAAZqMxmM6bxO+3xJ2eIKcD6+vgWF9ErJV/kNNIoDan5SulFzN/KT128IapZeELQzSEwViKE2Tgd0q7P3aG/8leI2AqfJXIq3yN+28t+iSnDWQoq5AK57CtrEMwkPAJ+BTniYYbeaVysGG82HgNUNAwp0yzb+amkj+DxCdFQrWNZmDqmroJnWZJzeXy2Uxfce2ju3dlXr1w6qr/3CsnZXeH6gRsUmtOgf0hPciQHocr2BsX7iPabT3nzXNuQyeuVqySOkTIWdKrFcythwKTKVRAJLN3mbCG88hGNgu2uusyQc+q9dz0AYkdHcn1bK4wAKMySk2vCN+eD9W+MFX5jT3X/cO4ZRa7ddDhtzWKVRdtoxlCC/JcobOItyE+l2KuzYkDs6pTjBIfBEvzNcZhbmfGsjzkmG7zSYlZxJsjtcEdeT6FUq1yHYewGZZ2wdd+FUu/CLe2DnL2i4NQx82psmb3qGvgNIhxwVzrQ5BLD+Kxi8syd6TyMSEQHywxYOYsJIk/fnp1syK9Mpq1zmp+FWvqlLuXrdv5wipPvce5SmS0BSObn2ymQdfZ0aexnGoQ+FPDpIKww6nP71ROH7jAYPFrO4SpStVKikvb8dcGzf/UcpEswKeS8c/uw=="
    CondicionesDePago="CONDICIONES" Exportacion="01" Fecha="2024-03-05T15:45:02" Folio="4284975"
    FormaPago="02" LugarExpedicion="31030" MetodoPago="PUE" Moneda="MXN"
    NoCertificado="30001000000500003316"
    Sello="dmgFtZp3mXkvwLU0oJIj0e5wBd5VpGUkvviG10KWwTxmiIA8p8nsjsr9o+9ApDS9oCcFmHVb9M5nX6lDwkCZA8K0gRuWqy/E5fSui0an4zQbyt4S+p5b7ihhl4pRN6qAvmzAPywJvUEmbs/nFumyilRYABLmgWCwR2d3G/ipfAc3uWULgAntEEHVKyvZ0FJu5GGUx/njE3UIqWxr+domKXXpKDMyVKUC6PNAuNdZGfKjXf5uH/AS3biqfTIhcC48oSFTQdkULokW0FkTfV73b3OjJlR/I/LYKSll2JoEno9MAkDrworLGLv2zit0BNNVqPGV8SHe3NXfuP4F+Dagtg=="
    Serie="MAFC" SubTotal="7101.20" TipoDeComprobante="I" Total="8237.39" Version="4.0"
    xmlns:cfdi="http://www.sat.gob.mx/cfd/4" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd">
    <cfdi:Emisor Nombre="EDRO OVIEDO CHAVIRA SEPULVEDA" RegimenFiscal="601" Rfc="AAA010101AAA" />
    <cfdi:Receptor DomicilioFiscalReceptor="31943" Nombre="MORALES VARELA INES"
        RegimenFiscalReceptor="612" Rfc="MOVI490121V6A" UsoCFDI="G01" />
    <cfdi:Conceptos>
        <cfdi:Concepto Cantidad="1" ClaveProdServ="31162405" ClaveUnidad="H87"
            Descripcion="1 - RETENS" Importe="270.00" ObjetoImp="02" ValorUnitario="270.00">
            <cfdi:Impuestos>
                <cfdi:Traslados>
                    <cfdi:Traslado Base="270.00" Importe="43.20" Impuesto="002"
                        TasaOCuota="0.160000" TipoFactor="Tasa" />
                </cfdi:Traslados>
            </cfdi:Impuestos>
        </cfdi:Concepto>
        <cfdi:Concepto Cantidad="11" ClaveProdServ="26101700" ClaveUnidad="H87"
            Descripcion="1005 - PRUEBA MEDIDA 2 PULGADAS" Importe="417.56" ObjetoImp="02"
            ValorUnitario="37.96">
            <cfdi:Impuestos>
                <cfdi:Traslados>
                    <cfdi:Traslado Base="417.56" Importe="66.81" Impuesto="002"
                        TasaOCuota="0.160000" TipoFactor="Tasa" />
                </cfdi:Traslados>
            </cfdi:Impuestos>
        </cfdi:Concepto>
        <cfdi:Concepto Cantidad="1" ClaveProdServ="31411600" ClaveUnidad="H87"
            Descripcion="21/2CLLOD - SELLO MONOBLOCK 63.50M" Importe="42.00" ObjetoImp="02"
            ValorUnitario="42.00">
            <cfdi:Impuestos>
                <cfdi:Traslados>
                    <cfdi:Traslado Base="42.00" Importe="6.72" Impuesto="002" TasaOCuota="0.160000"
                        TipoFactor="Tasa" />
                </cfdi:Traslados>
            </cfdi:Impuestos>
        </cfdi:Concepto>
        <cfdi:Concepto Cantidad="11" ClaveProdServ="26101700" ClaveUnidad="H87"
            Descripcion="54002R - ROTOR 93-94 FORD EXPLORER,93-94 MAZDA NAVAJO" Importe="6371.64"
            ObjetoImp="02" ValorUnitario="579.24">
            <cfdi:Impuestos>
                <cfdi:Traslados>
                    <cfdi:Traslado Base="6371.64" Importe="1019.46" Impuesto="002"
                        TasaOCuota="0.160000" TipoFactor="Tasa" />
                </cfdi:Traslados>
            </cfdi:Impuestos>
        </cfdi:Concepto>
    </cfdi:Conceptos>
    <cfdi:Impuestos TotalImpuestosTrasladados="1136.19">
        <cfdi:Traslados>
            <cfdi:Traslado Base="7101.20" Importe="1136.19" Impuesto="002" TasaOCuota="0.160000"
                TipoFactor="Tasa" />
        </cfdi:Traslados>
    </cfdi:Impuestos>
</cfdi:Comprobante>
```

**[no cookies]**

### Cabeceras de petición:

{{< table  "table-striped" >}}
| Key | Value |
|---------|--------|
| `Connection` | Keep-alive |
| `Content-Type` | application/xml |
| `Authorization` | Bearer |
| `Content-Length` | 4672 |
| `Host` | test.paxfacturacion.com.mx:490 |
| `Agent` | Apache-HttpClient/4.5.3 (Java/1.8.0_401) |
{{< /table >}}

{{% alert icon="⚠️" context="warning" %}}
Enviar **_Header Authorization_** con este tipo de contenido **Bearer Token**.
{{% /alert %}}

El siguiente `token` es el que debes ingresar como valor en la llave `Authorization`.

```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IndzZGxfcGF4Iiwicm9sZSI6IlVzdWFyaW8iLCJuYmYiOjE3MDk2NTg1NDIsImV4cCI6MTcwOTY4MDE0MiwiaWF0IjoxNzA5NjU4NTQyLCJpc3MiOiJodHRwczovL3Rlc3QucGF4ZmFjdHVyYWNpb24uY29tLm14OjQ5MCIsImF1ZCI6Imh0dHBzOi8vdGVzdC5wYXhmYWN0dXJhY2lvbi5jb20ubXg6NDkwIn0.aDK-95uWY8rzBJE9zhS_CwEj0iAz64wpG83JyZ6z2C8
```

## Respuesta

```xml
<cfdi:Comprobante
    Certificado="MIIFfzCCA2egAwIBAgIUMzAwMDEwMDAwMDA1MDAwMDMzMTYwDQYJKoZIhvcNAQELBQAwggErMQ8wDQYDVQQDDAZBQyBVQVQxLjAsBgNVBAoMJVNFUlZJQ0lPIERFIEFETUlOSVNUUkFDSU9OIFRSSUJVVEFSSUExGjAYBgNVBAsMEVNBVC1JRVMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlvc2Nhci5tYXJ0aW5lekBzYXQuZ29iLm14MR0wGwYDVQQJDBQzcmEgY2VycmFkYSBkZSBjYWxpejEOMAwGA1UEEQwFMDYzNzAxCzAJBgNVBAYTAk1YMRkwFwYDVQQIDBBDSVVEQUQgREUgTUVYSUNPMREwDwYDVQQHDAhDT1lPQUNBTjERMA8GA1UELRMIMi41LjQuNDUxJTAjBgkqhkiG9w0BCQITFnJlc3BvbnNhYmxlOiBBQ0RNQS1TQVQwHhcNMjMwNTA5MjEzNzM2WhcNMjcwNTA5MjEzNzM2WjCBpjEdMBsGA1UEAxMUWE9DSElMVCBDQVNBUyBDSEFWRVoxHTAbBgNVBCkTFFhPQ0hJTFQgQ0FTQVMgQ0hBVkVaMR0wGwYDVQQKExRYT0NISUxUIENBU0FTIENIQVZFWjEWMBQGA1UELRMNQ0FDWDc2MDUxMDFQODEbMBkGA1UEBRMSQ0FDWDc2MDUxME1HVFNIQzA0MRIwEAYDVQQLEwlTdWNpcnNhIDEwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCWEIhEVVC/mNpXWaUFpN0+QuHRsJcFc4C3qJQaHdmzlmWBB8DnCJrYB+fbLQu/QHo+W/JctMANXN9xljxX5nPK7GHDWm6kN/U4UtOi49kSt1Au2rnfTInpuvwvBVflW+tBI4y472TPO9wCD0+aS6T8RN6KFfw/NlUJDCEeICSohNIxbzCYg4OOf/pnSComvC1T7lyyJeGGwXwv8v43Wk5RQGiBnOuN9ZtKoyPLO7QFb+aGmZ0aAhSCMaCEiIlMinedSqBH2og780dH7Zsd5f3mNS0AbJ9xfr2DNkBj7qz7DcgnJT2KsSmtP1IkXUB+OkivXo1nzyr1VKpDloIWBPa7AgMBAAGjHTAbMAwGA1UdEwEB/wQCMAAwCwYDVR0PBAQDAgbAMA0GCSqGSIb3DQEBCwUAA4ICAQChJcU8iKvcRAOx0xoNilj5z2rby1DeGF39bVk0tuWlMgdmxnWznMPAAZqMxmM6bxO+3xJ2eIKcD6+vgWF9ErJV/kNNIoDan5SulFzN/KT128IapZeELQzSEwViKE2Tgd0q7P3aG/8leI2AqfJXIq3yN+28t+iSnDWQoq5AK57CtrEMwkPAJ+BTniYYbeaVysGG82HgNUNAwp0yzb+amkj+DxCdFQrWNZmDqmroJnWZJzeXy2Uxfce2ju3dlXr1w6qr/3CsnZXeH6gRsUmtOgf0hPciQHocr2BsX7iPabT3nzXNuQyeuVqySOkTIWdKrFcythwKTKVRAJLN3mbCG88hGNgu2uusyQc+q9dz0AYkdHcn1bK4wAKMySk2vCN+eD9W+MFX5jT3X/cO4ZRa7ddDhtzWKVRdtoxlCC/JcobOItyE+l2KuzYkDs6pTjBIfBEvzNcZhbmfGsjzkmG7zSYlZxJsjtcEdeT6FUq1yHYewGZZ2wdd+FUu/CLe2DnL2i4NQx82psmb3qGvgNIhxwVzrQ5BLD+Kxi8syd6TyMSEQHywxYOYsJIk/fnp1syK9Mpq1zmp+FWvqlLuXrdv5wipPvce5SmS0BSObn2ymQdfZ0aexnGoQ+FPDpIKww6nP71ROH7jAYPFrO4SpStVKikvb8dcGzf/UcpEswKeS8c/uw=="
    CondicionesDePago="CONDICIONES" Exportacion="01" Fecha="2024-03-05T15:45:02" Folio="4284975"
    FormaPago="02" LugarExpedicion="31030" MetodoPago="PUE" Moneda="MXN"
    NoCertificado="30001000000500003316"
    Sello="dmgFtZp3mXkvwLU0oJIj0e5wBd5VpGUkvviG10KWwTxmiIA8p8nsjsr9o+9ApDS9oCcFmHVb9M5nX6lDwkCZA8K0gRuWqy/E5fSui0an4zQbyt4S+p5b7ihhl4pRN6qAvmzAPywJvUEmbs/nFumyilRYABLmgWCwR2d3G/ipfAc3uWULgAntEEHVKyvZ0FJu5GGUx/njE3UIqWxr+domKXXpKDMyVKUC6PNAuNdZGfKjXf5uH/AS3biqfTIhcC48oSFTQdkULokW0FkTfV73b3OjJlR/I/LYKSll2JoEno9MAkDrworLGLv2zit0BNNVqPGV8SHe3NXfuP4F+Dagtg=="
    Serie="MAFC" SubTotal="7101.20" TipoDeComprobante="I" Total="8237.39" Version="4.0"
    xmlns:cfdi="http://www.sat.gob.mx/cfd/4" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd">
    <cfdi:Emisor Nombre="EDRO OVIEDO CHAVIRA SEPULVEDA" RegimenFiscal="601" Rfc="AAA010101AAA" />
    <cfdi:Receptor DomicilioFiscalReceptor="31943" Nombre="MORALES VARELA INES"
        RegimenFiscalReceptor="612" Rfc="MOVI490121V6A" UsoCFDI="G01" />
    <cfdi:Conceptos>
        <cfdi:Concepto Cantidad="1" ClaveProdServ="31162405" ClaveUnidad="H87"
            Descripcion="1 - RETENS" Importe="270.00" ObjetoImp="02" ValorUnitario="270.00">
            <cfdi:Impuestos>
                <cfdi:Traslados>
                    <cfdi:Traslado Base="270.00" Importe="43.20" Impuesto="002"
                        TasaOCuota="0.160000" TipoFactor="Tasa" />
                </cfdi:Traslados>
            </cfdi:Impuestos>
        </cfdi:Concepto>
        <cfdi:Concepto Cantidad="11" ClaveProdServ="26101700" ClaveUnidad="H87"
            Descripcion="1005 - PRUEBA MEDIDA 2 PULGADAS" Importe="417.56" ObjetoImp="02"
            ValorUnitario="37.96">
            <cfdi:Impuestos>
                <cfdi:Traslados>
                    <cfdi:Traslado Base="417.56" Importe="66.81" Impuesto="002"
                        TasaOCuota="0.160000" TipoFactor="Tasa" />
                </cfdi:Traslados>
            </cfdi:Impuestos>
        </cfdi:Concepto>
        <cfdi:Concepto Cantidad="1" ClaveProdServ="31411600" ClaveUnidad="H87"
            Descripcion="21/2CLLOD - SELLO MONOBLOCK 63.50M" Importe="42.00" ObjetoImp="02"
            ValorUnitario="42.00">
            <cfdi:Impuestos>
                <cfdi:Traslados>
                    <cfdi:Traslado Base="42.00" Importe="6.72" Impuesto="002" TasaOCuota="0.160000"
                        TipoFactor="Tasa" />
                </cfdi:Traslados>
            </cfdi:Impuestos>
        </cfdi:Concepto>
        <cfdi:Concepto Cantidad="11" ClaveProdServ="26101700" ClaveUnidad="H87"
            Descripcion="54002R - ROTOR 93-94 FORD EXPLORER,93-94 MAZDA NAVAJO" Importe="6371.64"
            ObjetoImp="02" ValorUnitario="579.24">
            <cfdi:Impuestos>
                <cfdi:Traslados>
                    <cfdi:Traslado Base="6371.64" Importe="1019.46" Impuesto="002"
                        TasaOCuota="0.160000" TipoFactor="Tasa" />
                </cfdi:Traslados>
            </cfdi:Impuestos>
        </cfdi:Concepto>
    </cfdi:Conceptos>
    <cfdi:Impuestos TotalImpuestosTrasladados="1136.19">
        <cfdi:Traslados>
            <cfdi:Traslado Base="7101.20" Importe="1136.19" Impuesto="002" TasaOCuota="0.160000"
                TipoFactor="Tasa" />
        </cfdi:Traslados>
    </cfdi:Impuestos>
    <cfdi:Complemento>
        <tfd:TimbreFiscalDigital xmlns:tfd="http://www.sat.gob.mx/TimbreFiscalDigital"
            xsi:schemaLocation="http://www.sat.gob.mx/TimbreFiscalDigital http://www.sat.gob.mx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11.xsd"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Version="1.1"
            UUID="1C320ABA-C273-8F47-9638-40A539B23D86" FechaTimbrado="2024-03-05T15:45:02"
            RfcProvCertif="SPR190613I52"
            SelloCFD="dmgFtZp3mXkvwLU0oJIj0e5wBd5VpGUkvviG10KWwTxmiIA8p8nsjsr9o+9ApDS9oCcFmHVb9M5nX6lDwkCZA8K0gRuWqy/E5fSui0an4zQbyt4S+p5b7ihhl4pRN6qAvmzAPywJvUEmbs/nFumyilRYABLmgWCwR2d3G/ipfAc3uWULgAntEEHVKyvZ0FJu5GGUx/njE3UIqWxr+domKXXpKDMyVKUC6PNAuNdZGfKjXf5uH/AS3biqfTIhcC48oSFTQdkULokW0FkTfV73b3OjJlR/I/LYKSll2JoEno9MAkDrworLGLv2zit0BNNVqPGV8SHe3NXfuP4F+Dagtg=="
            NoCertificadoSAT="30001000000400002495"
            SelloSAT="peZOG+U2cQhXAUu/gsKd0QPKINMsN5E0Bmr32kld2wkVYslq2sKNK778LZ91SoNKUsbdCJaY6axcgU6Cn/ewdYmOqeWY9rgBfcrScNgvTtFSxa4rvMeSp9yqncCwFlO6tsr79Is0zFwi38MbyW5tQaUjuKcY87HmD45QoVCdslhukO7zSMZ8cfMH5WymzKu8jUhYOSBQcR1ncwOKifSozYk+TEFzOJ+iBg30F+lGOb67OcN5j/xr9AaWGXrr4u72r6PLSlrjFG1x1hijOSB0dRvzw1YdoE27VPkhXZ7Lb0RHn/oE0aXMr6rKUA74Vlo36YNlPiQpbirkojKnFkZJDw==" />
    </cfdi:Complemento>
</cfdi:Comprobante>
```

## Códigos de error
A la hora de utilizar nuestro servicio es posible que te encuentres con ciertos errores. La siguiente lista tiene como objetivo ayudarte a comprender qué significa cada código de error y a solucionar problemas de manera más eficiente.

{{< table  "table-borderless" >}}
| Código | Descripción |
|---------|--------|
| `301` | XML mal formado. |
| `302` | Sello mal formado o inválido. |
| `303` | Sello no corresponde a emisor o caduco. |
| `304` | Certificado revocado o caduco. |
| `305` | La fecha de emisión no está dentro de la vigencia del CSD del Emisor. |
| `306` | El certificado no es de tipo CSD. |
| `307` | El CFDI contiene un timbre previo. |
| `308` | Certificado no expedido por el SAT. |
| `401` | Que el rango de la fecha de generación no sea mayor a 72 horas para la emisión del timbre. |
| `402` | Que exista el RFC del emisor conforme al régimen autorizado (Lista de validación de régimen) LCO. |
| `403` | Que la fecha de emisión sea posterior al 01 de Enero 2011. |
| `509` | Verifique el RFC del receptor. |
| `404` | La fecha de emisión es posterior a la fecha de timbrado. |
| `100` | El archivo de texto está mal formado. |
| `406` | El nombre de documento no corresponde a ninguno del sistema. |
| `570` | No se pudo recuperar el certificado del comprobante. |
| `622` | El servicio no está disponible. |
| `817` | No se pudo generar el sello del PAC. |
| `999` | Error durante el registro del comprobante. |
| `96`  | Usuario o contraseña incorrecta. |
| `97`  | No hay créditos disponibles. |
{{< /table >}}