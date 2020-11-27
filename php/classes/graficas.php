<?php
    require_once("../mysql/connection.php");


    class chart{

        public function getChartDest()
        {
            $conn=mysqlConnection::getConnection();
            $sql="SELECT lugNombre as nombres ,count(FK_Lugar) as valores
            FROM pre_reservacion
            JOIN lugar on FK_Lugar = lugNum where prStatus = 'autorizada'
            GROUP by FK_Lugar ORDER by FK_Lugar
            limit 5
            ";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->get_result();
            $outp = $result->fetch_all(MYSQLI_ASSOC);
            mysqli_stmt_close($stmt);
            $conn->close(); 

            return json_encode($outp);
        }

        public function getLugType()
        {
            $conn=mysqlConnection::getConnection();
            $sql="SELECT tlNombre as nombres,COUNT(*) as valores from lugar
            INNER JOIN tipolugar ON FK_TipoL = tlNum
            GROUP BY FK_TipoL
            ";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->get_result();
            $outp = $result->fetch_all(MYSQLI_ASSOC);
            mysqli_stmt_close($stmt);
            $conn->close(); 

            return json_encode($outp);
        }

        public function getChartStatus()
        {
          $conn=mysqlConnection::getConnection();
          $sql="SELECT  count(FK_Lugar) as valores ,prStatus as nombres 
                FROM pre_reservacion
                JOIN lugar on FK_Lugar = lugNum 
                GROUP by prStatus ORDER by FK_Lugar
                ";
          $stmt = $conn->prepare($sql);
          $stmt->execute();
          $result = $stmt->get_result();
          $outp = $result->fetch_all(MYSQLI_ASSOC);
          mysqli_stmt_close($stmt);
          $conn->close(); 

          return json_encode($outp);
        }

        public function getChartgenero()
        {
          $conn=mysqlConnection::getConnection();
          $sql="SELECT count(*) as valores, agGenero as nombres FROM agente GROUP by agGenero
                ";
          $stmt = $conn->prepare($sql);
          $stmt->execute();
          $result = $stmt->get_result();
          $outp = $result->fetch_all(MYSQLI_ASSOC);
          mysqli_stmt_close($stmt);
          $conn->close(); 

          return json_encode($outp);
        }

        public function getLugMun()
        {
          $conn=mysqlConnection::getConnection();
          $sql="SELECT count(*) as valores, mun_nombre as nombres
          FROM diclugar
          INNER JOIN	municipio ON FK_Municipio = mun_cod
          GROUP by FK_Municipio ";
          $stmt = $conn->prepare($sql);
          $stmt->execute();
          $result = $stmt->get_result();
          $outp = $result->fetch_all(MYSQLI_ASSOC);
          mysqli_stmt_close($stmt);
          $conn->close(); 

          return json_encode($outp);
        }
    }